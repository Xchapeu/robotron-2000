console.table({ status: "Working" });

const estatisticas = document.querySelectorAll('[data-estatistica]');

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    },
}

let index = 1;

document.querySelector('[data-cor]').addEventListener('click', (event) => {

    event.target.attributes.src.nodeValue = `img/robotron${index}.png`;
    
    index += 1;

    if(index > 5) {
        index = 0;
    }
});

const controle = document.querySelectorAll('[data-controle]');

controle.forEach(element => {
    element.addEventListener('click', event => {
        manipulaDados(event.target.dataset.controle, event.target.parentNode);
        atualizaEstatisticas(event.target.dataset.peca);
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');
    operacao === '-' ? peca.value = parseInt(peca.value) - 1 : peca.value = parseInt(peca.value) + 1;
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach((element) => {
        element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica];
    })
}

function numMegaSena() {
    return `analisando jogos...`;
}
