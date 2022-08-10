function contar(){
    let ini = document.getElementById(`iInicio`);
    let fim = document.getElementById(`iFim`);
    let pas = document.getElementById(`iPasso`);
    let res = document.getElementById(`iRes`);

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){ // teste se os valores estão vazios
        alert(`[ERRO]Verfique os dados e complete corretamente`);
        res.innerHTML = `Impossível contar`;
    } else {
        res.innerHTML = `Contando... <br>`;
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(pas.value);

        if(p <= 0){
            alert(`Passo inválido, considerando passo 1.`);
            p = 1;
        }

        if(i < f){ //contagem cescente
            for (let c = i; c <= f; c+= p){
                res.innerHTML += ` \u{27A1} ${c} `;
            }
        } else { // contagem decrescente
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `\u{27A1} ${c}`;
            }
        }
        
        res.innerHTML += `\u{27A1} \u{1F3C1}`;

    }

}