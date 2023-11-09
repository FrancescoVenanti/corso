// :)

const now = new Date();
console.log('now', now);

// fase iniziale: dobbiamo capire IN CHE MESE SIAMO, per riempire l'h1, e anche quanti giorni ha il mese corrente
// perche dobbiamo generare un numero di celle corrispondente 
// ogni volta che apriremo il calendario vogliamo una fedele rappresentazione del mese corrente

//dove salvo gli appuntamenti? ogni appuntamento e' una stringa, ogni giorno puo' contenere infiniti appuntamenti.
// e ogni mese ha un numero variabile di giorni (28 -31)

// il nostro scopo e' creare un array di array, dove l'array padre e' il mese e ogni array figlio rappresenta un giorno
// [
//      [],[],[],[],[],[],
//      [],[],[],[]
//      [],[],[],[],[]
//      [],[],[],[],[]
// ]

// esempio di giorno: 9 novembre
// '14:30 - QeA'
// '17:00 - 'debrief'
// '20:00 - cena'
// il 9 novembre e' un array di stringhe -> ['14:30 - QeA', '17:00 - 'debrief', '20:00 - cena']

//all'inizio pero io non so quanti giorni ci sono ancora in questo mese! creo solo il "guscio" del mese 
const appointments = [];
// ora dovrei pushare dentro appointments[] tanti sotto-array quanti sono i giorni del mese corrente 

const monthNames = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
]

const printCurrentMonthInH1 = function () {
    const title = document.querySelector('h1')    //prendo l'h1 dalla pagina
    const monthIndex = now.getMonth();  //10 mese corrente
    const currentMonth = monthNames[monthIndex];    //posizione 10 perche novembre
    console.log('mese', currentMonth)
    title.innerText = currentMonth; //riporto la stringa del mese nell'h1
    //lancio la funzione
}

// ora che sappiamo in che mese siamo dobbiamo calcolarne il numero dei giorni...
//per riempire correttamente la sezione delle celle

const daysInThisMonth = function () {
    const getYear = now.getFullYear();  //2023

    const getMonth = now.getMonth();    //10

    //quello di cui ho bisogno e' l'ultimo giorno valido del mese in corso
    //perche quel numero corrisponde anche al numero dei giorni del mese corrente

    //per ottenere l'ultimo giorno valido del mese in corso, creo una data 
    //relativa al primo giorno del mese successivo rispetto a quello corrente e tolgo un giorno

    const lastDayInTheMonth = new Date(getYear, getMonth +1, 0);    // -> 0 dicembre === 30 novembre 2023
    console.log(lastDayInTheMonth)
    const numberOfTheDay = lastDayInTheMonth.getDate();             //prende il giorno del mese da una data
    console.log('number of the day' +numberOfTheDay)
    //numberOFTheDay e' il numero di giorno del mese corrente ovvero il numero di volte per cui dovro ripetere il creazione in js di una cella giorno
    return numberOfTheDay;
}

const unSelectAllDays = function () {
    //il mio compito e' rimuovere altre classi selected precedentemente create
    //in modo lasciare il campo libero per la successiva applicazione della class selected alla cella che clicco
    //

    //APPROCCIO BULLDOZER
    //prendo tutte le celle e a tappeto rimuovo un eventuale classe selected
    //const allTheCells = document.getElementsByClassName('day');
    //const AllTheCellsAsArray = Array.from(allTheCells); //converto allthecells in array, perche altrimenti
    //una hTMLcollection NON e' ciclabile attraverso forEach
    //AllTheCellsAsArray.forEach((cell) => {
        //cell.classList.remove('selected');
    //})

    //APPROCCIO CHIRURGICO
    // const previousSelected = document.getElementsByClassName('selected')[0];
    const previousSelected = document.querySelector('.selected') 
        if (previousSelected) {
            previousSelected.classList.remove('selected');
        }
}

const changeMeetingDaySection = function (indexOfTheDay) {
    //questa funzione si occupa di riempire newMeetingDay al click su una cella 
    const rigthSpan = document.getElementById('newMeetingDay');
    rigthSpan.classList.add('hasday');
    rigthSpan.innerHTML = indexOfTheDay + 1;
}

const createDays = function (numberOfDays) {
    // numberOfDays adesso e' 30 (in novembre)
    const calendarDiv = document.getElementById('calendar');
    for (let i = 0; i<numberOfDays; i++) {
        //per ogni giorno del mese corrente...
        //creo una cella
        const dayCellDiv = document.createElement('div')
        //crea <div></div>
        dayCellDiv.classList.add('day')
        //<div class="day"></div>
    
        //ora questa cella singola del giorno la rendo cliccabile
        dayCellDiv.addEventListener('click', function (e) {
            //devo toglierla dalle altre precedenti
            unSelectAllDays();
            //ora che non ho piu altri selected nel calendario, lo aggiungo alla cella che ho cliccato
            dayCellDiv.classList.add('selected');

            //l'ultima cosa che manca e' trasportare il valore della cella che ho cliccato
            //in basso a sx, nella sezione meetingDay (ovvero il div ="newMeetingDay")
            changeMeetingDaySection(i);

            //sempre al click nella giornata, nel caso ci siano eventi da mostrare 
            //dobbiamo far comparire una lista
            if (appointments[i].length > 0) {
                //ci sono degli eventi da mostrare
                showAppointments(i)
            } else {
                //se non ci sono eventi sul giorno selezionato, la lista deve sparire
                const appointmentsDiv = document.getElementById('appointments');
                appointmentsDiv.style.display = 'none';
            }
        })
    

    const cellValue = document.createElement('h3');
    //<h3></h3>
    cellValue.innerText = i + 1;

    //appendere cellValue dentro dayCellDiv
    dayCellDiv.appendChild(cellValue); //<div class="day"><h3>1</h3></div>, appendo il value
    calendarDiv.appendChild(dayCellDiv);    //appendo la cella al giorno del calendario

    //ora che ho creato la parte fisica della pagina, inserisco un array appointments
    //per il giorno che sto ciclando in quel momento
    appointments.push([]);

    }
}
//lancio la funzione

const showAppointments = function (indexOfTheDay) {
    //serve a popolare la ul con tutti gli eventi del giorno, nel caso ce ne siano
    //ed eventualemnte mostrare la sezione appointments

    //passaggi per fare il push
    //1. prelevare gli eventi dal cassetto giusto (giorno) ovvero indexOfTheDay
    const appointmentsForThisDay = appointments[indexOfTheDay]  //['14:30 - QeA', '17:00 - 'debrief', '20:00 - cena']
    //2. selezionare la ul della pagina, quella da riempire con gli appuntamenti
    const appointmentsList = document.querySelector('#appointments ul')
    //3. ciclare appointmentsForThisDay e creo un li per ciascuno e appenderlo

    //prima di riempire la ul con gli li giusti svuoto la ul
    appointmentsList.innerHTML = '';

    appointmentsForThisDay.forEach((appointment) => {
        const newLi = document.createElement('li');
        newLi.innerText = appointment;
        appointmentsList.appendChild(newLi);
    })

    //la lista ora e' piena ma e' ancora nascosta, togliamo il display:none
    const appointmentDiv = document.getElementById('appointments');
    appointmentDiv.style.display = 'block';
}

const handleFormSubmit = function (e) {
    e.preventDefault(); //non esegue l'istruzione di default
    console.log("il form e' inviato");
    //cosa facciamo adesso
    //1. raccogliamo il giorno selezionato
    const selectedDay = document.getElementById('newMeetingDay').innerText; //9
    //2. raccolgo il meeting time dal form
    const meetingTime = document.getElementById('newMeetingTime').value;
    //3. raccolgo il meeting name
    const meetingName = document.getElementById('newMeetingName').value;
    //4. combino time e name in una stringa
    const meetingString = meetingTime + ' - ' +meetingName ;
    //5. inserisco la stringa in uno degli array dentro a appointments, in quello corrispondente al giorno selezionato
    //trovare l'indice corretto dentro a ppointments, in base al giorno che ho selezionato
    const rigthIndexForAppointments = parseInt(selectedDay) - 1;
    // pusho il mio evento nel cassettino corretto
    console.log('app prima', appointments)
    appointments[rigthIndexForAppointments].push(meetingString)
    console.log('app dopo', appointments)

    //creiamo il pallino e aggiungiamolo al giorno in cui abbiamo fatto il push dell'evento
    const dot = document.createElement('span');
    dot.classList.add('dot');
    //trobo la cella che ho selezionato
    const selectedCell = document.querySelector('.selected');
    if (!selectedCell.querySelector('.dot')){
        //se c'e' un dot non aggiungerlo
        selectedCell.appendChild(dot);
    }

    showAppointments(rigthIndexForAppointments);
}
//


printCurrentMonthInH1();   
const numberOfDaysInTheCurrentMonth = daysInThisMonth(); //restituisce 30 

createDays(numberOfDaysInTheCurrentMonth);

const meetingForm = document.querySelector('form');
meetingForm.addEventListener('submit', handleFormSubmit)