// declara vetor global
var pacientes = [];


// FUNÇÃO PARA MOSTRAR LISTA
function mostrarLista() {

  // referência da lista
  var outLista = document.getElementById("outLista");

  // variável da lista
  var lista = "";

  // percorre vetor
  for (i = 0; i < pacientes.length; i++) {

    lista += (i + 1) + ". ";

    lista += pacientes[i].nome + " - ";

    lista += pacientes[i].especialidade + " - ";

    lista += "R$ " + pacientes[i].valor.toFixed(2) + "\n";
  }

  // exibe lista
  outLista.textContent = lista;
}


// FUNÇÃO ADICIONAR PACIENTE
function adicionarPaciente() {

  // referências dos elementos
  var inPaciente = document.getElementById("inPaciente");

  var inEspecialidade = document.getElementById("inEspecialidade");

  var inValor = document.getElementById("inValor");


  // obtém valores
  var nome = inPaciente.value;

  var especialidade = inEspecialidade.value;

  var valor = Number(inValor.value);


  // valida nome
  if (nome == "") {

    alert("Informe o nome do paciente");

    inPaciente.focus();

    return;
  }


  // valida valor
  if (valor == 0 || isNaN(valor)) {

    alert("Informe o valor");

    inValor.focus();

    return;
  }


  // cria objeto paciente
  var paciente = {

    nome: nome,

    especialidade: especialidade,

    valor: valor
  };


  // adiciona no final do vetor
  pacientes.push(paciente);


  // mostra lista
  mostrarLista();


  // limpa campos
  inPaciente.value = "";

  inValor.value = "";


  // posiciona cursor
  inPaciente.focus();
}


// botão adicionar
var btAdicionar = document.getElementById("btAdicionar");

btAdicionar.addEventListener("click", adicionarPaciente);




// FUNÇÃO URGÊNCIA
function adicionarUrgencia() {

  // referências
  var inPaciente = document.getElementById("inPaciente");

  var inEspecialidade = document.getElementById("inEspecialidade");

  var inValor = document.getElementById("inValor");


  // obtém valores
  var nome = inPaciente.value;

  var especialidade = inEspecialidade.value;

  var valor = Number(inValor.value);


  // valida nome
  if (nome == "") {

    alert("Informe o nome do paciente");

    inPaciente.focus();

    return;
  }


  // valida valor
  if (valor == 0 || isNaN(valor)) {

    alert("Informe o valor");

    inValor.focus();

    return;
  }


  // cria objeto paciente
  var paciente = {

    nome: nome,

    especialidade: especialidade,

    valor: valor
  };


  // adiciona no início do vetor
  pacientes.unshift(paciente);


  // mostra lista
  mostrarLista();


  // limpa campos
  inPaciente.value = "";

  inValor.value = "";


  // posiciona cursor
  inPaciente.focus();
}


// botão urgência
var btUrgencia = document.getElementById("btUrgencia");

btUrgencia.addEventListener("click", adicionarUrgencia);




// FUNÇÃO ATENDER PACIENTE
function atenderPaciente() {

  // verifica lista vazia
  if (pacientes.length == 0) {

    alert("Não há pacientes na lista de espera");

    return;
  }


  // referência saída atendimento
  var outAtendimento = document.getElementById("outAtendimento");


  // remove primeiro paciente
  var atender = pacientes.shift();


  // mostra paciente em atendimento
  outAtendimento.textContent =

    atender.nome + " - " +

    atender.especialidade + " - R$ " +

    atender.valor.toFixed(2);


  // atualiza lista
  mostrarLista();
}


// botão atender
var btAtender = document.getElementById("btAtender");

btAtender.addEventListener("click", atenderPaciente);