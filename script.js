const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
    enunciado: "Em que lugar teve origem a palavra música?",
    alternativas: ["Grécia", "China", "Brasil", "India"
       {
        texto: "Grécia",
        afirmação: "Afirmação da alternativa 1"
       }
       











],
    },
    
    
    
    
    
    
    {
    enunciado: "O teatro é uma linguagem de que arte?",
    alternativas: ["Literárias", "Cênicas", "Visuais", "Musicais"],
    },
    {
    enunciado: "Qual é um dos elementos que compõem a dança?",
    alternativas: ["Contrapeso", "Espaço", "Ordem", "Transferência"], 
    }
    ];

    let atual = 0;
    let perguntaAtual;
    
    function mostraPergunta() {
        perguntaAtual = perguntas [atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas();
    }
    mostraPergunta();
    function mostraAlternativas () {
        for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement ("button");
            botaoAlternativas.textContent = alternativa;
            caixaAlternativas.appendChild(botaoAlternativas);
        }

    }