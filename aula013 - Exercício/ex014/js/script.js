function carregar() {
    let msg = document.getElementById(`msg`);
    let img = document.getElementById(`imagem`);
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas!`
    if(hora >=0 && hora < 12){
        //bomdia
        img.src = '../ex014/img/manha.png';
        document.body.style.background = '#ede0d8';
        let txt = document.getElementById(`txt`);
        txt.style.color = `black`
    } else if (hora >= 12 && hora <= 18){
        //boatarde
        img.src = '../ex014/img/tarde.png';
        document.body.style.background = '#e29838';

    } else {
        //boanoite
        img.src = '../ex014/img/noite.png';
        document.body.style.background = '#053c77';

    }
}
