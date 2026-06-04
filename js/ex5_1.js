var pacientes = [];
var preferenciais = [];
var urgencias = [];

function atualizarLista() {

  var outLista = document.getElementById("outLista");
  var lista = "";

  if (urgencias.length > 0) {

    lista += "Urgências:\n";

    for (var i = 0; i < urgencias.length; i++) {

      lista += (i + 1) + ". " +
        urgencias[i] +
        " - URGÊNCIA\n";
    }

    lista += "\n";
  }

  if (preferenciais.length > 0) {

    lista += "Preferenciais:\n";

    for (var i = 0; i < preferenciais.length; i++) {

      lista += (i + 1) + ". " +
        preferenciais[i] +
        " - PREFERENCIAL\n";
    }

    lista += "\n";
  }

  if (pacientes.length > 0) {

    lista += "Fila Normal:\n";

    for (var i = 0; i < pacientes.length; i++) {

      lista += (i + 1) + ". " +
        pacientes[i] +
        "\n";
    }
  }

  outLista.textContent = lista;
}

// ADICIONAR PACIENTE NORMAL
function adicionarPaciente() {
<<<<<<< HEAD

  var inPaciente =
    document.getElementById("inPaciente");

  var especialidade =
    document.getElementById("inEspecialidade");

  var nome = inPaciente.value;
=======
  // cria referência aos elementos de entrada e saída de dados da página
  var inPaciente = document.getElementById("inPaciente");
  var inDocumento = document.getElementById("inDocumento");
  var outLista = document.getElementById("outLista");
  
  var nome = inPaciente.value;           // obtém nome do paciente
  var documento = inDocumento.value.trim(); // obtém o documento (trim remove espaços vazios extras)
>>>>>>> upstream/main

  // verifica preenchimento do nome do paciente
  if (nome == "") {

    alert("Informe o nome do paciente");
    inPaciente.focus();
    return;
  }

<<<<<<< HEAD
  pacientes.push(
    nome + " - " + especialidade.value
  );
=======
  // verifica se o documento foi preenchido E se tem menos de 5 dígitos
  if (documento !== "" && documento.length < 5) {
    alert("O documento deve conter no mínimo 5 dígitos!");
    inDocumento.focus();
    return;
  }
>>>>>>> upstream/main

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
<<<<<<< HEAD

var btAdicionar =
  document.getElementById("btAdicionar");

btAdicionar.addEventListener(
  "click",
  adicionarPaciente
);

// ADICIONAR PREFERENCIAL
function adicionarPreferencial() {

  var inPaciente =
    document.getElementById("inPaciente");

  var especialidade =
    document.getElementById("inEspecialidade");

  var nome = inPaciente.value;

  if (nome == "") {

    alert("Informe o nome do paciente");
    inPaciente.focus();
    return;
  }

  preferenciais.push(
    nome + " - " + especialidade.value
  );

  atualizarLista();

  inPaciente.value = "";
  inPaciente.focus();
}

var btPreferencial =
  document.getElementById("btPreferencial");

btPreferencial.addEventListener(
  "click",
  adicionarPreferencial
);

// ADICIONAR URGÊNCIA
function adicionarUrgencia() {

  var inPaciente =
    document.getElementById("inPaciente");

  var especialidade =
    document.getElementById("inEspecialidade");

  var nome = inPaciente.value;
=======
// cria referência ao btAdicionar e associa function ao evento click
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);

// Adicionar urgência
function adicionarUrgencia() {
  // cria referência aos elementos de entrada e saída de dados da página
  var inPaciente = document.getElementById("inPaciente");
  var inDocumento = document.getElementById("inDocumento");
  var outLista = document.getElementById("outLista");
  
  var nome = inPaciente.value;           // obtém nome do paciente
  var documento = inDocumento.value.trim(); // obtém o documento
>>>>>>> upstream/main

  // verifica preenchimento do nome do paciente
  if (nome == "") {

    alert("Informe o nome do paciente");
    inPaciente.focus();
    return;
  }

<<<<<<< HEAD
  urgencias.push(
    nome + " - " + especialidade.value
  );
=======
  // NOVA VALIDAÇÃO: verifica se o documento foi preenchido E se tem menos de 5 dígitos
  if (documento !== "" && documento.length < 5) {
    alert("O documento deve conter no mínimo 5 dígitos!");
    inDocumento.focus();
    return;
  }
>>>>>>> upstream/main

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
<<<<<<< HEAD

var btUrgencia =
  document.getElementById("btUrgencia");

btUrgencia.addEventListener(
  "click",
  adicionarUrgencia
);

// ATENDER PACIENTE
=======
var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", adicionarUrgencia);

// Atender paciente
>>>>>>> upstream/main
function atenderPaciente() {

<<<<<<< HEAD
  var inPaciente =
    document.getElementById("inPaciente");

  if (
    urgencias.length == 0 &&
    preferenciais.length == 0 &&
    pacientes.length == 0
  ) {

    alert(
      "Não há pacientes na lista de espera"
    );

=======
  // verifica se vetor pacientes está vazio 
  if (pacientes.length == 0) {
    alert("Não há pacientes na lista de espera");
>>>>>>> upstream/main
    inPaciente.focus();
    return;
  }

  var atender;

  if (urgencias.length > 0) {

    atender = urgencias.shift();

  } else if (preferenciais.length > 0) {

    atender = preferenciais.shift();

  } else {

    atender = pacientes.shift();
  }

  var outAtendimento =
    document.getElementById("outAtendimento");

  outAtendimento.textContent = atender;

  // adiciona ao histórico
  historico.push({
    nome: atender
  });

<<<<<<< HEAD
var btAtender =
  document.getElementById("btAtender");

btAtender.addEventListener(
  "click",
  atenderPaciente
);
=======
  // soma total
  totalAtendimentos++;

  var lista = "";
  for (var i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + ". " + pacientes[i] + "\n";
  }

  outLista.textContent = lista;
}
var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);
>>>>>>> upstream/main
