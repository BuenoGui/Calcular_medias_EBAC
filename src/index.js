const form = document.getElementById('form-atividade');
const aprovado = '<img src="./imagens/aprovado.png" alt="emoji comemorando" />';
const reprovado = '<img src="./imagens/reprovado.png" alt="emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado"> Aprovado </span>';
const spanReprovado = '<span class="resultado reprovado"> Reprovado </span>';
const notaMinima = parseFloat(prompt("Digite qual a nota minima da sua instituição:"));


let linhas = ''; 



form.addEventListener('submit', function(adicionar) {
    adicionar.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMedia();
})

function adicionaLinha() {
    const nomeDaAtividade = document.getElementById('nome-atividade');
    const notaDaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(nomeDaAtividade.value)) {
        alert(`A atividade ${nomeDaAtividade.value} já foi registrada, por favor selecione outra`)
    } else {
        atividades.push(nomeDaAtividade.value);
        notas.push(parseFloat(notaDaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td> ${nomeDaAtividade.value} </td>`;
        linha += `<td> ${notaDaAtividade.value} </td>`;
        linha += `<td> ${notaDaAtividade.value >= notaMinima ? aprovado : reprovado} </td>`
        linha += '</tr>'
    
        linhas += linha;
    }
    nomeDaAtividade.value = "";
    notaDaAtividade.value = "";
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMedia() {
    const mediaFinal = calculaMedia();

    document.getElementById('mediaFinalValor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('mediaFinalResultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMedia () {
    let somaDasNotas = 0;

    for(let i = 0; i <notas.length; i++) {
        somaDasNotas += notas[i];
    }
    
    return somaDasNotas / notas.length;
}