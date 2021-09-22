var carta1 = {
    nome: "Bubassauro",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

var carta2 = {
    nome: "Darth Vader",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};

var carta3 = {
    nome: "Shiryu de Dragão",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
};

var carta4 = {
    nome: "Shiryu de Dragão",
    atributos: {
        ataque: 6,
        defesa: 9,
        magia: 7
    }
};

var cartas = [carta1, carta2, carta3, carta4];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * cartas.length);
    }
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirOpcoes();
}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto +=
            "<input type='radio':unchecked name='atributo' value='" +
            atributo +
            "'>" +
            atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; 1 < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador == valorCartaMaquina) {
        elementoResultado.innerHTML =
            "Você empatou pois seu valor foi " +
            valorCartaJogador +
            " e o valor da máquina foi " +
            valorCartaMaquina;
    } else if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML =
            "Você venceu pois seu valor foi " +
            valorCartaJogador +
            " e o valor da máquina foi " +
            valorCartaMaquina;
    } else if (valorCartaJogador < valorCartaMaquina) {
        elementoResultado.innerHTML =
            "Você perdeu pois seu valor foi " +
            valorCartaJogador +
            " e o valor da máquina foi " +
            valorCartaMaquina;
    }

    // console.log(atributoSelecionado);
    // console.log(cartaJogador.atributos[atributoSelecionado]);
}
