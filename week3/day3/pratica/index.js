// tre cose 
//1. funzione che fa addTask
//2. funzione che gestisce quando il task e' completo
//3. una funzione che fa attachDelete()

const handleSubmit = function (e) {
    e.preventDefault()              //evita il comportamento di default
    addTask();                      
    attachComplete();
    attachDelete();
}

const addTask = function () {
    //agganciare gli elementi html come fatto stamattina 
    const testo = document.getElementById('inputField');
    const tasks = document.getElementById('tasks');
    //stampare html necessario per aggiungere il value del mio inputField.value
    //ongi task che aggiungo aggiunge html -> +=
    const paragrafo = document.createElement('p');
    paragrafo.innerHTML = testo.value;
    if (testo.value === '') {
        alert("fai qualcosa")
    } else {tasks.appendChild(paragrafo);
    }
    
}

const attachComplete = function () {
    //aggancia gli elementi html
    const completed = querySelector('p');
    completed.addEventListener('click', attachComplete)
    completed.classList.toggle('completed')
    //li ciclo con for
    //all'elemento che seleziono aggiunge|toglie una classe (toggle)
    //attributo js this per leggere il contenuto 
    //css -> text-decoration: line-through;
}

const attachDelete = function () {
    //aggancia gli elementi html
    //ciclo for
    //metodo per rimuovere qualcpsa -> .remove()
}

window.onload = function () {
    let form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit)
}

