function carregar() {
    // Criamos dois Objetos msg e img.
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    // var hora = 11; // Var forçada!
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

    // Condicional composta

    if (hora >= 00 && hora < 12) {
        // Bom Dia!!
        img.scr = 'img/img-manha.png';
        document.body.style.background = "#fbce59";

    } else if (hora >= 12 && hora <= 18) {
        // Boa Tarde!!
        img.src = 'img/img-tarde.png';
        document.body.style.background = "#7c4434";

    } else {
        // Boa Noite!!
        img.src = 'img/img-noite.png';
        document.body.style.background = "#373750";
    }
}