let num = document.getElementById(`idNum`);
let lista = document.getElementById(`idLista`);
let res = document.getElementById(`res`);
let valores = [];

function isNumero(n){ // verificando se o numero digitado esta entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else {
        return false;
    }
}
function inLista(n, l) { // verificando se o numero já está na lista
    if(l.indexOf(Number(n)) != -1){ // index -1 siginifica que o numero ainda nao faz parte do array
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){
        
    } else {
        alert(`Valor inválido ou já consta na lista`);
    }
}