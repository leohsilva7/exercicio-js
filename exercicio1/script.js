// Seleciona os elementos do HTML
const botao = document.getElementById('btn');
const divClique = document.getElementById('clique');

let contador = 0;

divClique.textContent = `Cliques: ${contador}`;

botao.addEventListener('click', () => {
    contador++;
    divClique.textContent = `Cliques: ${contador}`;
});

