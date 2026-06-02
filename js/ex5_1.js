var pacientes = [];       
var urgencias = [];
var historico = [];
var totalAtendimentos = 0;

// Atualiza lista de espera
function atualizarLista() {
  var outLista = document.getElementById("outLista");
  var lista = "";

  if (urgencias.length > 0) {
    lista += "Urgências:\n";

    for (var i = 0; i < urgencias.length; i++) {
      lista += (i + 1) + ". " + urgencias[i] + " - URGÊNCIA\n";
    }

    lista += "\n";
  }

  if (pacientes.length > 0) {
    lista += "Fila Normal:\n";

    for (var i = 0; i < pacientes.length; i++) {
      lista += (i + 1) + ". " + pacientes[i] + "\n";
    }
  }

  outLista.textContent = lista;

  atualizarHistorico();
}

// Atualiza histórico
function atualizarHistorico() {
  var outHistorico = document.getElementById("outHistorico");
  var outQtd = document.getElementById("outQtd");
  var outUltimo = document.getElementById("outUltimo");

  var textoHistorico = "";

  for (var i = 0; i < historico.length; i++) {
    textoHistorico +=
      (i + 1) + ". " +
      historico[i].nome +
      "\n";
  }

  outHistorico.textContent = textoHistorico;

  // quantidade de atendimentos
  outQtd.textContent = totalAtendimentos;

  // último paciente atendido
  if (historico.length > 0) {
    outUltimo.textContent =
      historico[historico.length - 1].nome;
  } else {
    outUltimo.textContent = "Nenhum";
  }
}

// Adicionar paciente normal
function adicionarPaciente() {
  var inPaciente = document.getElementById("inPaciente");
  var nome = inPaciente.value;

  if (nome == "") {
    alert("Informe o nome do paciente");
    inPaciente.focus();
    return;
  }

  pacientes.push(nome);

  atualizarLista();

  inPaciente.value = "";
  inPaciente.focus();
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);

// Adicionar urgência
function adicionarUrgencia() {
  var inPaciente = document.getElementById("inPaciente");
  var nome = inPaciente.value;

  if (nome == "") {
    alert("Informe o nome do paciente");
    inPaciente.focus();
    return;
  }

  urgencias.push(nome);

  atualizarLista();

  inPaciente.value = "";
  inPaciente.focus();
}

var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", adicionarUrgencia);

// Atender paciente
function atenderPaciente() {
  var inPaciente = document.getElementById("inPaciente");

  if (urgencias.length == 0 && pacientes.length == 0) {
    alert("Não há pacientes na lista de espera");
    inPaciente.focus();
    return;
  }

  var outAtendimento = document.getElementById("outAtendimento");

  var atender;

  // prioridade para urgência
  if (urgencias.length > 0) {
    atender = urgencias.shift();
  } else {
    atender = pacientes.shift();
  }

  // mostra paciente em atendimento
  outAtendimento.textContent = atender;

  // adiciona ao histórico
  historico.push({
    nome: atender
  });

  // soma total
  totalAtendimentos++;

  atualizarLista();
}

var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);