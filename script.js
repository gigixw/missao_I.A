const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
    enunciado: "Em que lugar teve origem a palavra música?",
    alternativas: [
        {
            texto: "China",
            afirmação: ""
        },
        {
            texto: "Grécia",
            afirmação: ""
        },
        {
            texto: "Brasil",
            afirmação: ""
        },
        {
            texto: "India",
            afirmação: ""
        },
    ]
},
    
    {
        enunciado: "O teatro é uma linguagem de que arte?",
    alternativas: [
        {
            texto: "Literárias",
            afirmação: ""
        },
        {
            texto: "Cênicas",
            afirmação: ""
        },
        {
            texto: "Visuais",
            afirmação: ""
        },
        {
            texto: "Musicais",
            afirmação: ""
        },
    ]
},

    {
        enunciado: "Qual é um dos elementos que compõem a dança?",
    alternativas: [
        {
            texto: "Contrapeso",
            afirmação: ""
        },
        {
            texto: "Espaço",
            afirmação: ""
        },
        {
            texto: "Ordem",
            afirmação: ""
        },
        {
            texto: "Transferência",
            afirmação: ""
        },
    ]
},
    ];

    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";
    
    function mostraPergunta() {
        if (atual >= perguntas.length) {
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas [atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = " ";
        mostraAlternativas();
    }
    mostraPergunta();
    function mostraAlternativas () {
        for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = 
            document.createElement ("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }

    function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = opcaoSelecionada.afirmação;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    }

    function mostraResultado() {
        caixaPerguntas.textContent = "O cultural abrange várias áreas e dentre elas temos a arte, a música, o teatro, a dança e muitos outros. Todas elas conversando entre si, formam um lindo espetáculo.";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    }