/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
    ciclo for stampa
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for (i=0; i<pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
    metodo array sort
*/
pets.sort();
for (i=0; i<pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
    metodo array oppure
*/
// metodo 1
for (i=pets.length-1; i>=0; i--) {
  console.log(pets[i]);
}
//metodo 2
pets.reverse();
for (i=0; i<pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
    metodo
*/
//console.log(pets);
let scambio = pets[0];
pets[0] = pets[pets.length-1];
pets[pets.length-1] = scambio;
console.log(pets);



/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
    dot notation per aggiungere qualcosa a tutti
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

let licensePlates = ['123456', 'aaaaaa', 'bbbbb'];

  for (let i = 0; i < cars.length; i++) {
    cars[i].licensePlate = licensePlates[i];
}

//console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
    metodi
*/
const car1 = 
  {
    brand: 'suzuki',
    model: 'swift',
    color: 'orange',
    trims: ['titanium', 'GT', 'r-line'],
    licencePlate: '123abc',
  }


cars.push(car1);

for (let i = 0; i < cars.length; i++) {
    cars[i].trims.pop();
} 
console.log(cars);


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
    metodi + metodo.trims
*/
const justTrims = []

for (let i = 0; i < cars.length; i++) {
    justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
  ciclo for poi if poi metodo per prendere solo porzione stringa (prima lettera) e comparo
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.slice(0, 1) === 'b') {
    console.log("fizz");
  } else {
    console.log("buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
    ciclo while poi if !==32
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
/* metodo 1 */
let y=0
i=0
let x=32
while (y!==x) {
  console.log(numericArray[i]);
  y=numericArray[i];
  i++;
}

/* metodo 2 */
i=0;
while (i < numericArray.length) {
  if (numericArray[i]!==32) {
    console.log(numericArray[i]);
  }else {
    console.log(numericArray[i]);
    break;
  }
  i++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
    creo un'array a cui lettera corrisponde numero
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const posizioni = [];

for (let i = 0; i < charactersArray.length; i++) {
  const c = charactersArray[i];
  
  switch (c) {
    case 'a':
      posizioni.push(1);
      break;
    case 'b':
      posizioni.push(2);
      break;
    case 'c':
      posizioni.push(3);
      break;
    case 'd':
      posizioni.push(4);
      break;
    case 'e':
      posizioni.push(5);
      break;
    case 'f':
      posizioni.push(6);
      break;
    case 'g':
      posizioni.push(7);
      break;
    case 'h':
      posizioni.push(8);
      break;
    case 'i':
      posizioni.push(9);
      break;
    case 'l':
      posizioni.push(10);
      break;
    case 'm':
      posizioni.push(11);
      break;
    case 'n':
      posizioni.push(12);
      break;
    case 'o':
      posizioni.push(13);
      break;
    case 'p':
      posizioni.push(14);
      break;
    case 'q':
      posizioni.push(15);
      break;
    case 'r':
      posizioni.push(16);
      break;
    case 's':
      posizioni.push(17);
      break;
    case 't':
      posizioni.push(18);
      break;
    case 'u':
      posizioni.push(19);
      break;
    case 'v':
      posizioni.push(20);
      break;
    case 'z':
      posizioni.push(21);
      break;
    default:
      posizioni.push("non e' un carattere"); 
      break;
  }
}

console.log(posizioni);
