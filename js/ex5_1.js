var pacientes = [];       // declara vetor global

function adicionarPaciente() {
  // cria referência aos elementos de entrada e saída de dados da página
  var inPaciente = document.getElementById("inPaciente");
  var inDocumento = document.getElementById("inDocumento");
  var outLista = document.getElementById("outLista");
  
  var nome = inPaciente.value;           // obtém nome do paciente
  var documento = inDocumento.value.trim(); // obtém o documento (trim remove espaços vazios extras)

  // verifica preenchimento do nome do paciente
  if (nome == "") {
    alert("Informe o nome do paciente");
    inPaciente.focus();
    return;
  }

  // verifica se o documento foi preenchido E se tem menos de 5 dígitos
  if (documento !== "" && documento.length < 5) {
    alert("O documento deve conter no mínimo 5 dígitos!");
    inDocumento.focus();
    return;
  }

  // Se o documento for preenchido (e for válido), junta com o nome
  var pacienteCompleto = nome;
  if (documento !== "") {
    pacienteCompleto += " (Doc: " + documento + ")";
  }

  pacientes.push(pacienteCompleto);    // adiciona no final do vetor

  var lista = "";          // string para concatenar pacientes

  // percorre os elementos do vetor 
  for (var i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + ". " + pacientes[i] + "\n";
  }

  // altera o conteúdo da tag outLista
  outLista.textContent = lista;

  // limpa os campos e posiciona cursor em inPaciente
  inPaciente.value = "";
  inDocumento.value = "";
  inPaciente.focus();
}
// cria referência ao btAdicionar e associa function ao evento click
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);


function adicionarUrgencia() {
  // cria referência aos elementos de entrada e saída de dados da página
  var inPaciente = document.getElementById("inPaciente");
  var inDocumento = document.getElementById("inDocumento");
  var outLista = document.getElementById("outLista");
  
  var nome = inPaciente.value;           // obtém nome do paciente
  var documento = inDocumento.value.trim(); // obtém o documento

  // verifica preenchimento do nome do paciente
  if (nome == "") {
    alert("Informe o nome do paciente");
    inPaciente.focus();
    return;
  }

  // NOVA VALIDAÇÃO: verifica se o documento foi preenchido E se tem menos de 5 dígitos
  if (documento !== "" && documento.length < 5) {
    alert("O documento deve conter no mínimo 5 dígitos!");
    inDocumento.focus();
    return;
  }

  // Se o documento for preenchido, junta com o nome
  var pacienteCompleto = nome;
  if (documento !== "") {
    pacienteCompleto += " (Doc: " + documento + ")";
  }

  // adiciona paciente no início do vetor
  pacientes.unshift(pacienteCompleto);

  // string para concatenar pacientes
  var lista = "";

  // percorre os elementos do vetor 
  for (var i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + ". " + pacientes[i] + "\n";
  }

  // altera o conteúdo da tag outLista
  outLista.textContent = lista;

  // limpa os campos e posiciona cursor em inPaciente
  inPaciente.value = "";
  inDocumento.value = "";
  inPaciente.focus();
}
var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", adicionarUrgencia);


function atenderPaciente() {
  var inPaciente = document.getElementById("inPaciente");

  // verifica se vetor pacientes está vazio 
  if (pacientes.length == 0) {
    alert("Não há pacientes na lista de espera");
    inPaciente.focus();
    return;
  }

  var outAtendimento = document.getElementById("outAtendimento");
  var outLista = document.getElementById("outLista");

  var atender = pacientes.shift();
  outAtendimento.textContent = atender;

  var lista = "";
  for (var i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + ". " + pacientes[i] + "\n";
  }

  outLista.textContent = lista;
}
var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);
