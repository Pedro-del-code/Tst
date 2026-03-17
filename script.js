// GERAR CÓDIGOS INÚTEIS LOUCOS
function gerarCodigosInuteis() {
    let div = document.getElementById('telaCodigos');
    let codigos = '';
    for(let i = 0; i < 200; i++) {
        codigos += Math.random().toString(36).substring(7) + ' ';
        codigos += 'ERRO_0x' + Math.floor(Math.random()*1000) + ' ';
        codigos += 'sys32_' + Math.random()*100 + ' ';
        codigos += 'root@' + Math.random()*999 + ' ';
        codigos += 'FALHA_' + Math.floor(Math.random()*999) + '\n';
    }
    div.innerHTML = codigos;
}

gerarCodigosInuteis();

// APÓS 5 SEGUNDOS, MOSTRA O TERMINAL
setTimeout(() => {
    document.getElementById('telaCodigos').style.display = 'none';
    document.getElementById('telaTerminal').style.display = 'flex';
    
    // DIGITAR TEXTO DO TERMINAL
    const linhas = [
        { elemento: 'termLine1', texto: "_iniciando sistema. . .", delay: 30 },
        { elemento: 'termLine2', texto: "permissão sucedida professor Ricardo.", delay: 40 }
    ];
    
    let charIndex = 0;
    let linhaIndex = 0;
    
    function digitarLinha() {
        if (linhaIndex < linhas.length) {
            const linha = linhas[linhaIndex];
            const elemento = document.getElementById(linha.elemento);
            
            if (charIndex < linha.texto.length) {
                elemento.innerHTML += linha.texto[charIndex];
                charIndex++;
                setTimeout(digitarLinha, linha.delay);
            } else {
                charIndex = 0;
                linhaIndex++;
                if (linhaIndex < linhas.length) {
                    setTimeout(digitarLinha, 500);
                } else {
                    // APÓS TERMINAL, VAI PRA CAIXA BRANCA
                    setTimeout(() => {
                        document.getElementById('telaTerminal').style.display = 'none';
                        document.getElementById('telaFalas').style.display = 'flex';
                        
                        // APÓS AS FALAS, VAI PRO GIF
                        setTimeout(() => {
                            document.getElementById('telaFalas').style.display = 'none';
                            document.getElementById('telaGif').style.display = 'flex';
                        }, 11000); // 11 SEGUNDOS PRA TODAS AS FALAS
                        
                    }, 1000);
                }
            }
        }
    }
    
    digitarLinha();
    
}, 5000); // 5 SEGUNDOS DE CÓDIGOS INÚTEIS
