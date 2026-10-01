function girar(id, grados) {
    document.getElementById(id).setAttribute("transform", "rotate(" + grados + ")");
}

function reloj() {
    const t = new Date();
    girar("h", (t.getHours() % 12) * 30 + t.getMinutes() * 0.5);
    girar("m", t.getMinutes() * 6);
    girar("s", t.getSeconds() * 6);
}

reloj();
setInterval(reloj, 1000);