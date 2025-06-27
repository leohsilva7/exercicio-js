const luzVermelha = document.getElementById('vermelho');
const luzAmarela = document.getElementById('amarelo');
const luzVerde = document.getElementById('verde');

const btnStart = document.getElementById('btnStart');
const btnPause = document.getElementById('btnManutencao');
const btnStop = document.getElementById('btnStop');

let intervalo = null;
let estadoAtual = 0;
let piscando = false;

function resetarLuzes() {
    luzVermelha.style.opacity = '0.3';
    luzAmarela.style.opacity = '0.3';
    luzVerde.style.opacity = '0.3';
}

function modoAutomatico() {
    resetarLuzes();
    if (estadoAtual === 0) {
        luzVermelha.style.opacity = '1';
        estadoAtual = 1;
    } else if (estadoAtual === 1) {
        luzVerde.style.opacity = '1';
        estadoAtual = 2;
    } else {
        luzAmarela.style.opacity = '1';
        estadoAtual = 0;
    }
}

function modoManutencao() {
    resetarLuzes();
    piscando = !piscando;
    luzAmarela.style.opacity = piscando ? '1' : '0.3';
}

btnStart.addEventListener('click', () => {
    clearInterval(intervalo);
    estadoAtual = 0;
    modoAutomatico();
    intervalo = setInterval(modoAutomatico, 2000);
});

btnManutencao.addEventListener('click', () => {
    clearInterval(intervalo);
    piscando = false;
    intervalo = setInterval(modoManutencao, 500);
});

btnStop.addEventListener('click', () => {
    clearInterval(intervalo);
    resetarLuzes();
});
