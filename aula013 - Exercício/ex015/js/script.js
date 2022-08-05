function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let formAno = document.getElementById(`idAno`);
    let res = document.getElementById(`res`);

    if (formAno.value.length == 0 || formAno.value > ano) {
        alert(`[ERRO] Verifique os dados e tente novamente`);
    } else {
        let formSex = document.getElementsByName(`sexo`);
        var idade = ano - Number(formAno.value);
        let genero = ``;
        let img = document.createElement(`img`);
        img.setAttribute(`id`, `foto`);
        if (formSex[0].checked) {
            genero = `Homem`;
            if (idade >= 0 && idade < 16) {
                // crianca
                img.setAttribute(`src`, `../ex015/images/homem_crianca.png`);
            } else if (idade < 21) {
                //jovem
                img.setAttribute(`src`, `../ex015/images/homem_jovem.png`);
            } else if (idade < 50) {
                //adulto
                img.setAttribute(`src`, `../ex015/images/homem_adulto.png`);
            } else {
                //idoso
                img.setAttribute(`src`, `../ex015/images/homem_idoso.png`);
            }
        } else {
            genero = `Mulher`;
            if (idade >= 0 && idade < 10) {
                // crianca
                img.setAttribute(`src`, `../ex015/images/mulher_crianca.png`);
            } else if (idade < 21) {
                //jovem
                img.setAttribute(`src`, `../ex015/images/mulher_jovem.png`);
            } else if (idade < 50) {
                //adulto
                img.setAttribute(`src`, `../ex015/images/mulher_adulta.png`);
            } else {
                //idoso
                img.setAttribute(`src`, `../ex015/images/mulher_idosa.png`);
            }
        }
        res.style.textAlign = `center`;
        res.innerHTML = `<strong>Você é ${genero} com ${idade} anos!<br></strong>`;
        res.appendChild(img);


    }
}