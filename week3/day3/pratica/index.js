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
    const div = document.createElement('div');
    const paragrafo = document.createElement('p')
    const button = document.createElement('button')
    paragrafo.innerHTML = testo.value;
    button.innerHTML = '<i class="fas fa-trash"></i>'
    if (testo.value === '') {
        alert("fai qualcosa")
    } else {
        tasks.appendChild(div);
        div.appendChild(paragrafo);                 //era meglio usare template literals
        paragrafo.appendChild(button);
        paragrafo.classList.add('para')
        button.classList.add('rimuovi');
        
        paragrafo.addEventListener('click', function () { //aggiunto l'event listener direttemente alla creazione dell'elemento
            this.classList.toggle('completed');
        });

    }
    testo.value = '';
}

/*  const attachComplete = function () {
    
    const p = document.getElementsByClassName('para')

    
    for (let i = 0; i < p.length; i++) {
    
        p[i].addEventListener('click', function () {  
            
            this.classList.toggle('completed');
            
            /* if (!this.classList.contains('completed')) {
                this.classList.add('completed');
            } else {
                this.classList.remove('completed');
            }  */
            
    /*})

    }
}  */

const attachDelete = () => {
    //aggancia gli elementi html
    const tasks = document.querySelectorAll('div');
    const rimuovi = document.getElementsByClassName('rimuovi');
    //ciclo for
    for (let i = 0; i < tasks.length; i++) {
        rimuovi[i].addEventListener('click', function () {

            tasks[i].remove();
        });

    }
    //metodo per rimuovere qualcpsa -> .remove()
}

window.onload = function () {
    let form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit)
}

