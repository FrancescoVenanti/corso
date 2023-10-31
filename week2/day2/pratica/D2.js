/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
var num1 = 1;
var num2 = 10;
if (num1>num2){
  console.log("num1 e' piu' grande di num2");
}else {
  console.log("num2 e' piu' grande di num1");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
if (num1 !== 5){
  console.log("not equal");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
if (num1%5 == 0){
  console.log("divisibile per 5");
} else {
  console.log("non e' divisibile per 5");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
var diff = num1 - num2;
var somma = num1 + num2;
if ((num1 == 8) || (num2==8) ){
  console.log("uno dei due e' uguale a 8");
} else if((diff=8) || (somma = 8)) {
  console.log("la somma o sottrazione e' uguale a 8");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
var totalShoppingCart = 40;
const ship = 10;
if (totalShoppingCart <= 50) {
   var totaleFinale = totalShoppingCart + ship; 
} else {
  var totaleFinale = totalShoppingCart;
}

console.log("importo dovuto: " +totaleFinale);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
  sconto * 0.8
*/
const sconto = 0.8;
totalShoppingCart = totalShoppingCart*sconto;

if (totalShoppingCart <= 50) {
  var totaleFinale = totalShoppingCart + ship; 
} else {
  var totaleFinale = totalShoppingCart;
}

console.log("importo dovuto: " +totaleFinale);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
  annido if controllo condizioni e stampo la condizione true
*/
var num1 = 30
var num2 = 10;
var num3 = 20;
if (num1 > num2) {
  if (num2>num3){
    console.log(num1, num2, num3);
  } else if (num3>num1){
    console.log(num3, num1, num2);
  } else {
    console.log(num1, num3, num2);
  }
} else if (num2 > num3) {
  if (num3>num1){
    console.log(num2, num3, num1);
  } else {
    console.log(num2, num1, num3);
  }
} else {
  console.log(num3, num2, num1);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  typeof -> if else
*/
var valore = "ciao";
if (typeof valore == "number"){
  console.log("E' un numero")
} else {
  console.log("non e' un numero")
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  modulo di 2 (%2==0)
*/
var x = 12;
if (x%2 == 0) {
  console.log(x + " e' pari");
} else if (x%2 == 1) {
  console.log(x + " e' dispari");
} 

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  let val = 15
  if (val < 5) {
      console.log("Meno di 5"); 
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
  oggetto -> aggiungi qualcosa a un oggetto
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";

console.log(me.city);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  cancellare qualcosa da un oggetto
*/
delete me.lastName;
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  metodi array -> rimuovere ultimo elemento
*/
me.skills.pop();
console.log(me.skills);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  metodi array -> inserire qualcosa  nell-array
*/

var array = [];
array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(array);



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  selezionare il nono elemento e assegnare un nuovo valore
*/
array.pop();
array.push(100);
console.log(array[9]);

/* SCRIVI QUI LA TUA RISPOSTA */
