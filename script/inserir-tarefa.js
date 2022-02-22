//funcionalidade de inserir informações através do formulário
var tarefa =""

var botaoAdicionar = document.querySelector("#adicionar-tarefa");
botaoAdicionar.addEventListener("click", insereDados);

function insereDados(event) {
    event.preventDefault();
    console.log("botão ok");

    var form = document.querySelector("#form-adiciona");
    var tarefa=form.descricao.value
    console.log(tarefa);
};

function adicionaTarefa(tarefa) {

};

function montarTr(tarefa) {

};

function montarTd(tarefa) {

};

/*Desenvolver no futuro:
-criar eventos de validação*/