function contar(){
    let ini = document.getElementById(`iInicio`);
    let fim = document.getElementById(`iFIm`);
    let pas = document.getElementById(`iPassoi`);

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert(`[ERRO]Verfique os dados e complete corretamente`);
    } else {
        alert(`Tudo ok`);
    }

}