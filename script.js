function carregar() {
    var msgIni = window.document.querySelector('div#msgInicial')
    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = addZero(data.getMinutes())

    msg.innerHTML = `Agora são ${hora}:${minutos}`
    function addZero(i) {
        if (i < 10) {
            i = "0" + i
        }
        return i;
    }


    if (hora >= 0 && hora <= 12) {
        img.src = "../imagens/manha.png"
        document.body.style.background = "#e2cd9d"
        msgIni.innerHTML = 'Bom dia!'

    } else if (hora > 12 && hora < 18) {
        img.src = "../imagens/tarde.png"
        document.body.style.background = "#d9843d"
        msgIni.innerHTML = 'Boa tarde!'


    } else {
        img.src = "../imagens/noite.png"
        document.body.style.background = "#535052"
        msgIni.innerHTML = 'Boa noite!'

    }
}