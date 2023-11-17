const creaCaselle = function () {
    const contenitore = document.getElementById('caselle');
    for (let i=0; i<24; i++) {
        let caselle = document.createElement('div');
        caselle.classList.add('caselle');
        contenitore.appendChild(caselle);
    }
}
creaCaselle();