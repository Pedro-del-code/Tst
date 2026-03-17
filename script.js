const lines = [
    { text: "_iniciando sistema. . .", delay: 30 },
    { text: "permissão sucedida professor Ricardo.", delay: 40 },
    { text: "", delay: 10 },
    { text: "Eh, será que o código tá funcionando? provavelmente sim.", delay: 50 },
    { text: "bom enfim bom dia todos meu nome e Pedro,", delay: 45 },
    { text: "é por meio desse código que está sendo rodado pelo professor", delay: 45 },
    { text: "quero deseja minhas sinceras desculpas.", delay: 60 },
    { text: "(seria melhor eu ter reunido coragem do que tá fazendo essa ideia de merd-)", delay: 35 },
    { text: "Bom não vou cita o nome dela só queria que ela soubesse,", delay: 50 },
    { text: "PRIMEIRO ANO C O MELHOR DO COLÉGIO", delay: 100 }
];

let currentLine = 0;
let currentChar = 0;

function typeLine() {
    if (currentLine < lines.length) {
        const lineElement = document.getElementById(`line${currentLine + 1}`);
        lineElement.classList.add('typing');
        
        if (currentChar < lines[currentLine].text.length) {
            lineElement.innerHTML += lines[currentLine].text[currentChar];
            currentChar++;
            setTimeout(typeLine, lines[currentLine].delay);
        } else {
            lineElement.classList.remove('typing');
            currentLine++;
            currentChar = 0;
            
            if (currentLine < lines.length) {
                let pauseTime = 400;
                if (currentLine === 3) pauseTime = 800;
                if (currentLine === 6) pauseTime = 1000;
                if (currentLine === 9) pauseTime = 1200;
                setTimeout(typeLine, pauseTime);
            } else {
                setTimeout(showCatVideo, 1000);
            }
        }
    }
}

function showCatVideo() {
    document.getElementById('terminal').style.display = 'none';
    document.getElementById('videoContainer').style.display = 'flex';
}

window.onload = () => {
    setTimeout(typeLine, 1000);
};
