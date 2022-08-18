let num = document.getElementById(`idNum`); // numero diigtado
let lista = document.getElementById(`idLista`); // lista dos resultados
let res = document.getElementById(`res`); // resultado após clicar em finalizar
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
    if (isNumero(num.value) && !inLista(num.value, valores)){ // chamando as funcoes 
        valores.push(Number(num.value)); // adicionando valor digitado ao vetor
        let item = document.createElement(`option`); // criando uma option para aparecer na tela
        item.text = `Valor ${num.value} foi adicionado`;
        lista.appendChild(item);// definindo que a option é child da lista
        res.innerHTML = ``; //  se algum valor for digitado após clicar em finalizar, o campo de resultados fica vazio
    } else {
        alert(`Valor inválido ou já consta na lista`);
    }
    num.value = ``; // deixar o campo vazio após digitar um numero
    num.focus(); // colocar o cursor automaticamente na caixa de texto
}

function finalizar() {
    if(valores.length == 0) { // verificando se algum valor foi digitado
        alert(`Adicione valores antes de finalizar!`);
    } else {
        let total = valores.length; // verificando quantos valores tem dentro do vetor
        let maior = valores[0]; // dizendo que o 1 valor é o maior
        let menor = valores[0]; // dizendo que o 1 valor é o menor
        let soma = 0;
        let media = 0;
        for(let pos in valores) { // verificando qual valor é maior e menor
            soma += valores[pos]; // somando todos os valores do vetor
            if(valores[pos] > maior){
                maior = valores[pos];
            }
            if(valores[pos] < menor) {
                menor = valores[pos];
            }
        }
        media = soma / total;

        // escrevendo as informações na tela
        res.innerHTML = ``;
        res.innerHTML += `<p><strong>Ao todo temos ${total} numeros cadastrados!</strong></p>`;
        res.innerHTML += `<p><strong>O maior valor é ${maior}!</strong></p>`;
        res.innerHTML += `<p><strong>O menor valor é ${menor}!</strong></p>`;
        res.innerHTML += `<p><strong>A soma entre os valores é ${soma}!</strong></p>`;
        res.innerHTML += `<p><strong>A média entre os valores é ${media}!</strong></p>`;

    }
}