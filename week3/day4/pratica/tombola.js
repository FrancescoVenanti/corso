//1. una funzione che genera la tabella principale con tutti i numeri
//2. una funzione che va a scrivere i numeri (push i un array)
//3. una funzione associata al bottone che genera dei numeri random
//4. una funzione che evidenzia ( classList.add('evidenzia')
//5. extra funzione che genra tabelle piu piccole da 24
//funzioni vanno dichiarate e invocate


const createCells = function () {
    const table = document.querySelector('table');
    let number = 1;

    for (let i = 1; i<5; i++) {
        let newRow = document.createElement('tr')
        table.appendChild(newRow);

        for (y=1; y<20; y++){
            let newCell = document.createElement('td')
            newCell.innerHTML = number;
            number ++;
            newRow.appendChild(newCell)
            
        }
    }
}



const createSmalltable = function () {
    const smallTable = document.getElementById('tabellina');
    let newTable = document.createElement('table')
    newTable.classList.add('tabelline')
    smallTable.appendChild(newTable);
    

    for (let i = 1; i<3; i++) {
        let newRow = document.createElement('tr')
        newTable.appendChild(newRow);

        for (y=1; y<11; y++){
            let newCell = document.createElement('td')
            newCell.innerHTML = Math.floor(Math.random() * 76) + 1;
            newRow.appendChild(newCell)
            
        }
    }
}

const generateNumbers = function () {
    
    const selezionato = document.querySelectorAll('td')
    let NumeriUsciti = []
    const numbers = []
    for (let i = 0; i<selezionato.length; i++) {
        numbers[i] = i+1
    }
    console.log(selezionato.length)
    const randomNumber = Math.floor(Math.random() * 76) + 1;
    console.log(randomNumber);

    //non prendere i numeri gia usciti
    while (parseInt(NumeriUsciti.includes(randomNumber))) {
        randomNumber = Math.floor(Math.random() * 76) + 1;
    }

    const p = document.getElementById('numeroEstratto');
    p.innerHTML = randomNumber;

    for (let i = 0; i<numbers.length; i++) {
        if (numbers[i] == randomNumber) {
            selezionato[i].classList.add('evidenzia');
            NumeriUsciti[i] = randomNumber;
        }
    }
    
}


createCells()
const invio = document.querySelector('button');
invio.addEventListener('click', generateNumbers)

const AddSmallTable = document.getElementById('addSmallTable');
AddSmallTable.addEventListener('click', createSmalltable)