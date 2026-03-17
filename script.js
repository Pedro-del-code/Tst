// GERAR CÓDIGOS MATRIX LOUCOS
const matrixDiv = document.getElementById('matrix');
const caracteres = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

function gerarMatrix() {
    let linhas = '';
    for(let i = 0; i < 50; i++) {
        for(let j = 0; j < 30; j++) {
            linhas += caracteres[Math.floor(Math.random() * caracteres.length)];
        }
        linhas += ' ' + Math.random().toString(36).substring(2, 8).toUpperCase() + ' ';
        linhas += 'ERRO_0x' + Math.floor(Math.random()*9999).toString(16);
        linhas += ' SYS_' + Math.floor(Math.random()*999);
        linhas += ' root@' + Math.random().toString(36).substring(2, 10);
        linhas += '\n';
    }
    matrixDiv.innerHTML = linhas;
}

// ATUALIZA RÁPIDO PRA SIMULAR CHUVA DE CÓDIGOS
setInterval(gerarMatrix, 100);

// DEPOIS DE 8 SEGUNDOS, MOSTRA O TERMINAL
setTimeout(() => {
    // PARA O MATRIX
    clearInterval();
    matrixDiv.style.opacity = '0';
    
    setTimeout(() => {
        matrixDiv.style.display = 'none';
        document.getElementById('terminal').style.display = 'flex';
        
        // DIGITAR TERMINAL
        const termLines = [
            { id: 'term1', texto: "_iniciando sistema...", delay: 40 },
            { id: 'term2', texto: "Sistema ativado.", delay: 40 },
            { id: 'term3', texto: "Bem vindo professor/professora.", delay: 40 }
        ];
        
        let lineIndex = 0;
        let charIndex = 0;
        
        function digitarTerminal() {
            if (lineIndex < termLines.length) {
                const linha = termLines[lineIndex];
                const elemento = document.getElementById(linha.id);
                elemento.classList.add('typing');
                
                if (charIndex < linha.texto.length) {
                    elemento.innerHTML += linha.texto[charIndex];
                    charIndex++;
                    setTimeout(digitarTerminal, linha.delay);
                } else {
                    elemento.classList.remove('typing');
                    charIndex = 0;
                    lineIndex++;
                    if (lineIndex < termLines.length) {
                        setTimeout(digitarTerminal, 600);
                    } else {
                        // VAI PRO TEXTO GRANDE
                        setTimeout(() => {
                            document.getElementById('terminal').style.display = 'none';
                            document.getElementById('textoGrande').style.display = 'flex';
                            
                            // DEPOIS DO TEXTO, VAI PRO GIF
                            setTimeout(() => {
                                document.getElementById('textoGrande').style.display = 'none';
                                document.getElementById('gifFinal').style.display = 'flex';
                            }, 17000); // 17 SEGUNDOS PRA LER O TEXTO
                            
                        }, 1000);
                    }
                }
            }
        }
        
        digitarTerminal();
        
    }, 1000);
}, 8000); // 8 SEGUNDOS DE CÓDIGOS VOANDO
