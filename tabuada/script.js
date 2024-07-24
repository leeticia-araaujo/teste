const botao = window.document.getElementById('btn');

botao.addEventListener('mouseenter', entrar);
botao.addEventListener('mouseout', sair);
botao.addEventListener('click', clicar);

function entrar() {
    botao.style.background = '#bebcfdc4';
}

function sair() {
    botao.style.background = 'white'; 
}

function clicar() {
    let num = window.document.querySelector('input#num');
    let numero = parseFloat(num.value)
    let res = window.document.querySelector('p#res');

    if (Number.isInteger(numero) && num.value.length != 0) {//verifica se é um número inteiro e se o campo está preenchido
        res.innerHTML = `Tabuada do número ${numero} <br>`; 
        res.innerHTML += ` <br>`; 

        let contador = 0;
        let soma = numero * contador;

        do {
            res.innerHTML += `${numero} x ${contador} = ${soma} <br>`;
            contador++;
            soma = numero * contador;
        } while(contador <= 10)

    } else {
        window.alert('[ERRO] Verifique os dados e tente novamente.');
    }
}   