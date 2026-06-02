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

  pacientes.push(
    nome + " - " + especialidade.value
  );

  atualizarLista();

  inPaciente.value = "";
  inPaciente.focus();
}

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

  if (nome == "") {

    alert("Informe o nome do paciente");
    inPaciente.focus();
    return;
  }

  urgencias.push(
    nome + " - " + especialidade.value
  );

  atualizarLista();

  inPaciente.value = "";
  inPaciente.focus();
}

var btUrgencia =
  document.getElementById("btUrgencia");

btUrgencia.addEventListener(
  "click",
  adicionarUrgencia
);

// ATENDER PACIENTE
function atenderPaciente() {

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

  atualizarLista();
}

var btAtender =
  document.getElementById("btAtender");

btAtender.addEventListener(
  "click",
  atenderPaciente
);