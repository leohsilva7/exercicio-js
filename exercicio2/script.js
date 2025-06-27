const botao = document.getElementById('btn');
const input = document.getElementById('num');

// para gerar um número aleatório entre 1 e 10
const numeroGerado = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

// Cria um parágrafo para exibir mensagens
const mensagem = document.createElement('p');
document.body.appendChild(mensagem);

botao.addEventListener('click', () => {
    const palpite = Number(input.value);
    

    if (isNaN(palpite) || palpite < 1 || palpite > 10) {
        mensagem.textContent = 'Por favor, insira um número válido entre 1 e 10.';
        return;
    }
    else if (palpite < numeroGerado) {
        tentativas++;
        mensagem.textContent = 'Tente um número maior';
    } else if (palpite > numeroGerado) {
        tentativas++;
        mensagem.textContent = 'Tente um número menor';
    } else {
        tentativas++;
        mensagem.textContent = `Parabéns! Você acertou o número ${numeroGerado} em ${tentativas} tentativa(s).`;
    }

    input.value = '';
    input.focus();
});

