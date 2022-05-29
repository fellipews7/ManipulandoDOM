function EditarNumeros(){
    camposNumeros = document.getElementsByClassName('numeros');
    if (document.getElementById('iAlterarNumeros').checked == true) {
        ativar = false;
    }else{
        ativar = true;
    }

    for (var i = 0; i < camposNumeros.length; i++) {
        camposNumeros[i].readOnly = ativar;
    }
}

function CalcularSomaCol1() {
    camposColuna1 = document.getElementsByClassName('coluna1');
    campoResultado = document.getElementById('tarefa1');

    soma = 0;

    for (var i = 0; i < camposColuna1.length; i++) {
        soma += parseInt(camposColuna1[i].value);
    }

    campoResultado.value = soma;

}

function CalcularProdutoRow1() {
    camposLinha1 = document.getElementsByClassName('linha1');
    campoResultado = document.getElementById('tarefa2');

    produto = 1;

    for (var i = 0; i < camposLinha1.length; i++) {
        produto *= parseInt(camposLinha1[i].value);
    }

    campoResultado.value = produto;

}

function CalcularSomaGeral() {
    campos = document.getElementsByTagName('input');
    campoResultado = document.getElementById('tarefa3');

    soma = 0;

    for (var i = 0; i < campos.length; i++) {
        if (campos[i].getAttribute('type') === "number"){
            soma += parseInt(campos[i].value);
        }

    }

    campoResultado.value = soma;

}

function CalcularProdutoDiagonalPrincipal(){
    camposDiagonalPrincipal = document.getElementsByClassName('diagonalPrincipal');
    campoResultado = document.getElementById('tarefa4');

    produto = 1;

    for (var i = 0; i < camposDiagonalPrincipal.length; i++) {
        produto *= parseInt(camposDiagonalPrincipal[i].value);
    }

    campoResultado.value = produto;

}

