/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;
//console.log('esercizio A: '+sum);


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
  let random = Math.floor(Math.random() * 21);
//console.log('esercizio b: '+random);


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name : 'francesco', 
  surname : 'venanti',
  age : 27
}
//console.log('esercizio c: ', me);


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
//console.log('esercizio d: ', me);


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["javascript", "css"];
//console.log('esercizio e: ', me);


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.unshift('html');
//console.log('esercizio f: ', me);


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
//console.log('esercizio g: ', me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function () {
  let random = Math.ceil(Math.random() * 6);
  return random
}
//console.log('esercizio 1: ', dice())


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
let min = 100000000000000
let max = 20000000
const whoIsBigger = function (a, b) {
  if (a > b) {
    return min;
  } else {
    return max;
  }
}
//console.log('esercizio 2: ', whoIsBigger(min, max))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const myString = "I love coding";
const splitMe = function (string) {
  arrStrings = string.split(" ");
  return arrStrings
}
//console.log('esercizio 3: ', splitMe(myString));


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const myString2 = "javascript";
const myBool = false;
const deleteOne = function (string, bool) {
  if (bool) {
    return string.slice(1);
  } else {
    return string.slice(0, -1);
  }
}
//console.log('esercizio 4: ', deleteOne(myString2, myBool))


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const myString3 = "i have 4 dogs";
const onlyLetters = function (string) {
  var nuovaStringa = "";
  for (let i = 0; i < string.length; i++) {
    var lettera = string[i];
    if (isNaN(parseInt(lettera))) {
      nuovaStringa+=lettera
    }
}return nuovaStringa
}
//console.log('esercizio 5: ', onlyLetters(myString3))


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
//ho letteralmente trovato la soluzione online (a quanto ho capito regex in questo caso e' un'espressione che rispetta la sintassi dell'email) test ritorna vero
//se la stringa rispetta il formato di regex )
const myEmail = "aaaaaaaaa@gmail.com";
function isThisAnEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
//console.log("esercizio 6 ", isThisAnEmail(myEmail));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = function () {

  switch (new Date().getDay()) {
    case 0 : 
        day = "domenica";
    break;

    case 1 : 
        day = "lunedi";
    break;

    case 2 : 
        day = "martedi";
    break;

    case 3 : 
        day = "mercoledi";
    break;

    case 4 : 
        day = "giovedi";
    break;

    case 5 : 
        day = "venerdi";
    break;

    case 6 : 
        day = "sabato";
    break;
}

  return day;
}
//console.log("esercizio 7, oggi e': ", whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
let ripetizioni = 3;
const dadiObj = {sum:0, values:[]};
const rollTheDices = function (reps) {
  for (let i=0; i<reps; i++) {
    let valore = dice();
    dadiObj.sum += valore;
    dadiObj.values.push(valore); 
  }
  return dadiObj;
}
//console.log('esercizio 8: ', rollTheDices(ripetizioni));


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const myData ='2023-11-1'; //funziona solo se la data di input e' in questo formato
const howManyDays = function (data) {
  let today = new Date(); 
  let date = new Date(data); // trasformo la data ottenuta in oggetto Date

  let differenceInMs = today - date; //restituisce la differenza in millisecondi
  let msInDay = (1000 * 60 * 60 * 24) //millisecondi in un giorno
  let differenceInDays = Math.floor(differenceInMs / msInDay) //calcolo quanti giorni di differenza
  return differenceInDays;
}

//console.log("esercizio 9: ", howManyDays(myData) );


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const myBDay = 10;
const myBMonth = 11;
const isTodayMyBirthday = function (bday, bmonth) {
  let today = new Date();
  giorno = today.getDate();
  mese = today.getMonth() + 1; //+1 perche il mese parte da zero
  if (giorno == bday && mese == bmonth) {
    return true;
  } else {
    return false;
  }
}
//console.log("esercizio 10: ", isTodayMyBirthday(myBDay,myBMonth))


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
//le chiamate alle funzioni di questi esercizi sono sotto all'array movies
const propToDelete = "Year"
const deleteProp = function(arr, string) {
  arr.forEach((el) => {
    delete el[string];
  })
  return arr
}

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function (arr) {
  let newMovie = movies[0];
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > parseInt(newMovie.Year)) {
      newMovie = movies[i];
    }
  }
  return newMovie;
}


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function (arr) {
  return movies.length;
}

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = function (arr) {
  const movieYears = [];
  for (let i=0; i<arr.length; i++) {
    movieYears[i]=arr[i].Year
  }
  return movieYears;
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = function (arr) {
  let thisMillennium = [];
  for (let i=0; i<arr.length; i++) {
    if (parseInt(arr[i].Year)>1999) {
      thisMillennium.push(arr[i]);
    }
  }
  return thisMillennium;
}

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function (arr) {
  let sommaAnni = 0;
  arr.forEach(el => {
    sommaAnni += parseInt(el.Year);
  })
  return sommaAnni;
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = function (arr, string) {
  searchedMovie = [];
  arr.forEach(el => {
    if (el.Title == string) {
      searchedMovie = el
    }
  })
  return searchedMovie;
}

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = function (arr, string) {
  const obj = {match:[], unmatch:[]};
  arr.forEach(el => {
    if (el.Title.includes(string)){
      obj.match.push(el);
    } else {
      obj.unmatch.push(el);
    }
  })
  return obj;
}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = function (arr, index) {
  arr.splice(index, 1);
  return arr;
}

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selectContainer = function () {
  const container = document.getElementById('container')
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const allTd = function () {
  let td = document.getElementsByTagName('td');
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const printTD = function () {
  let td = document.querySelectorAll('td');
  td.forEach(el => {
    console.log(el.innerHTML)
  })
}
//console.log('esercizio 22: ')
//printTD()


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const redLinks = function () {
  let a = document.querySelectorAll('a');
  a.forEach(el => {
    el.style.backgroundColor = 'red';
  })  
}
//redLinks();


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const addNewElement = function () {
  let list = document.getElementById('myList');
  let li = document.createElement('li');
  list.appendChild(li)
}
//addNewElement()


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const discardList = function () {
  let list = document.querySelectorAll('#myList li');
  list.forEach(el => {
    el.remove()
  })
}
//discardList()
//oppure
const discardList2 = function () {
  let list = document.getElementById('myList');
  list.innerHTML = '';
}
//discardList2()


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const addTest = function () {
  let tr = document.querySelectorAll('tr');
  tr.forEach (el => {
    el.classList.add('test');
  })
}
//addTest()


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
const halfTree = function (num) {
  for (let i=0; i<num; i++) {
    let prova = '*';
    for (let y = 0; y<i; y++){
      prova+='*';
    }
    console.log(prova);
  }
  
}
//halfTree(9)


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
const tree = function (num) {
  for (let i=0; i<=num; i++) {
    let prova = ''
    let z = num
      while (z>i) {
        prova +=' '
        z=z-1
      }
      prova += '*'
    for (let y = 0; y<i; y++){
      
      prova+='**';
      
    }
    console.log(prova);
  }
}
//tree(10)

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
const isItPrime = function (num) {
  for (i=2; i<num; i++) {
    if (num%i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isItPrime(113));
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]




//console.log("esercizio 11: ", deleteProp(movies, propToDelete));
//console.log("esercizio 12: ", newestMovie(movies));
//console.log("esercizio 13: ",countMovies(movies));
//console.log("esercizio 14", onlyTheYears(movies));
//console.log("esercizio 15", onlyInLastMillennium(movies));
//console.log("esercizio 16",sumAllTheYears(movies));
//console.log("esercizio 17",searchByTitle(movies, 'Avengers: Endgame'))
//console.log("esercizio 18", searchAndDivide(movies, "Avengers"));
//console.log("esercizio 19", removeIndex(movies, 1))