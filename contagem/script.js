const contar = window.document.getElementById('contar');

contar.addEventListener('mouseenter', entrar);
contar.addEventListener('mouseout', sair);
contar.addEventListener('click', clicar);

function entrar(){
    contar.style.boxShadow = '2px 2px 8px #0000003d';
}

function sair(){
    contar.style.boxShadow = 'none';
}

function clicar(){
    let inicio = window.document.getElementById('inicio');
    let fim = window.document.getElementById('fim');
    let passo = window.document.getElementById('passo');
    let res = window.document.querySelector('div#res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || passo.value < 1) {
        window.alert('[Erro] Verifique e preencha os campos corretamente.');
    } else {
        let start = Number(inicio.value);
        let end = Number(fim.value);
        let pass = Number(passo.value);

        res.innerHTML = 'Contando: ';

        if (start < end) {
            for (let cont = start; cont <= end; cont += pass) {
                res.innerHTML += `${cont}`;
                if (cont + pass <= end) {
                    res.innerHTML += ` \u{2192} `;
                }
            }
        } else {
            for (let cont = start; cont >= end; cont -= pass) {
                res.innerHTML += `${cont}`;
                if (cont - pass >= end) {
                    res.innerHTML += ` \u{2192} `;
                }
            }
        }
            
        
    }
}