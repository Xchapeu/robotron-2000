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
        manipulaDados(
            event.target.dataset.controle, 
            event.target.parentNode, 
            event.target.dataset.peca, 
            atualizaEstatisticas
        );
    })
})

function manipulaDados(operacao, controle, stats, fn) {
    const peca = controle.querySelector('[data-contador]');
    if(operacao === '-') {
        if(peca.value > 0) {
            peca.value = parseInt(peca.value) - 1;
            fn(stats, operacao);
        }
    } else {
        peca.value = parseInt(peca.value) + 1;
        fn(stats, operacao);
    }
}

function atualizaEstatisticas(peca, operacao) {
    estatisticas.forEach((element) => {
        if(operacao === '-') {
            element.textContent = parseInt(element.textContent) - pecas[peca][element.dataset.estatistica];
        } else {
            element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica];
        }
    })
}

