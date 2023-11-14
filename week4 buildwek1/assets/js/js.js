const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];

let punteggio = 0; //variabile globale del punteggio
let index = 0; //indice della domanda

// ------------------------- timer
let i = 59;
const timer = function () {
    const timerPar = document.getElementById('timer');
    timerPar.innerText = i;
    if (i<=0) {
        premiTasti();
    }
    i--;
}

const interval1 = setInterval(timer, 1000);

// ------------------- genera domande e risposte
const generaDomanda = function (arr, indice) {
    const divRisposte = document.querySelector('.risposte');
    for (let i=0; i<=arr[indice].incorrect_answers.length; i++) {
        const risposte = document.createElement('button');
        risposte.classList.add('bottoneRisposta');
        divRisposte.appendChild(risposte);
    }
    const domanda = document.getElementById('domanda');
    //const risposte = document.querySelectorAll('.bottoneRisposta');
    risposte = document.getElementsByClassName('bottoneRisposta');
    domanda.innerHTML = arr[indice].question;

    if (arr[indice].incorrect_answers.length == 3) {
        rispIndex = Math.floor(Math.random()*4);

        risposte[rispIndex].innerHTML = arr[indice].correct_answer; //assegnazione risposta corretta
        risposte[rispIndex].classList.add('corretta');

        //assegnazione risposta sbagliata
        switch (rispIndex) {
            case 0: risposte[1].innerHTML = arr[indice].incorrect_answers[0];
            risposte[2].innerHTML = arr[indice].incorrect_answers[1];
            risposte[3].innerHTML = arr[indice].incorrect_answers[2];
            break;

            case 1: risposte[0].innerHTML = arr[indice].incorrect_answers[0];
            risposte[2].innerHTML = arr[indice].incorrect_answers[1];
            risposte[3].innerHTML = arr[indice].incorrect_answers[2];
            break;

            case 2: risposte[0].innerHTML = arr[indice].incorrect_answers[0];
            risposte[1].innerHTML = arr[indice].incorrect_answers[1];
            risposte[3].innerHTML = arr[indice].incorrect_answers[2];
            break;

            case 3: risposte[0].innerHTML = arr[indice].incorrect_answers[0];
            risposte[2].innerHTML = arr[indice].incorrect_answers[1];
            risposte[1].innerHTML = arr[indice].incorrect_answers[2];
            break;
            default: console.log('errore');
        }
    } else {
        rispIndex = Math.floor(Math.random()*2);
        risposte[rispIndex].innerHTML = arr[indice].correct_answer;
        risposte[rispIndex].classList.add('corretta');
        switch (rispIndex) {
            case 0: risposte[1].innerHTML = arr[indice].incorrect_answers[0];
            break;
            case 1: risposte[0].innerHTML = arr[indice].incorrect_answers[0];
            break;
        }
    }
    index = index + 1;  //aggiorna index domanda
}

  generaDomanda(questions, index)
  


const premiTasti = function () {
  setTimeout(function () {

    const pulsanti = document.querySelectorAll('.bottoneRisposta');
    pulsanti.forEach(element => {
        element.remove();
    })

    if (index < questions.length) {

    //parte genera domanda
    generaDomanda(questions, index)
    rendiCliccabile()
    segnaPunti()
    aggiornaDomanda(questions);

    //parte il timer
    i=59;
    interval1;

    } else {
      clearInterval(interval1);
      generaRisultati();
    }


    },500)
}

const rendiCliccabile = function () {
  const pulsanti = document.querySelectorAll('.bottoneRisposta');
  pulsanti.forEach(element => {
  element.addEventListener('click', premiTasti)});
}
rendiCliccabile()

const segnaPunti = function () {
  const corretto = document.querySelector('.corretta');
  corretto.addEventListener('click', function () {
    punteggio ++;
    corretto.setAttribute('style', 'background-color:green;')
    console.log(punteggio)
  })
}
segnaPunti()

const aggiornaDomanda = function (arr) {
  const par = document.getElementById('nDomanda');
  par.innerHTML = 'question ' + index +'<span class="pink"> / 10</span>';
}
aggiornaDomanda(questions);

const generaRisultati = function () {
  const par = document.getElementById('nDomanda');
  par.remove();
  const timer = document.getElementById('timer');
  timer.remove();

  const titolo = document.getElementById('domanda');
  titolo.innerText = 'Results'

  const sottoTitolo = document.getElementById('sottoTitolo')
  sottoTitolo.innerText = 'The summary of your answers:'

  const corpoCentrale = document.querySelector('.risposte');
  corpoCentrale.classList.add('centraleFlex')

  const div1 = document.createElement('div')
  corpoCentrale.appendChild(div1);
  const corrette = document.createElement('h2');
  div1.appendChild(corrette);
  corrette.innerHTML = 'Correct' +'<br>' +'<strong>' +(punteggio/questions.length)*100 +'</strong>' +'%'
  const par1 = document.createElement('p');
  par1.innerHTML = punteggio +'/' +questions.length +' questions';
  div1.appendChild(par1);

  const div2 = document.createElement('div')
  corpoCentrale.appendChild(div2)
  div2.classList.add('cerchio');
  const par2 = document.createElement('p');
  const parBlu = document.createElement('p');
  const parPiccolo = document.createElement('p');
  parBlu.setAttribute('style', 'color:#00ffff');
  parPiccolo.setAttribute('style', 'font-size:12px')
  div2.appendChild(par2)
  div2.appendChild(parBlu)
  div2.appendChild(parPiccolo)
  let pass = (questions.length/100)*60;
  if (punteggio >= pass) {
    par2.innerHTML = '<strong> Congratulations! </strong>' 
    parBlu.innerHTML ='<strong>You passed the exam.</strong>'
    parPiccolo.innerHTML = "We'll send you the certificate in few minutes. check your emeail (including promotions / spam folder"
  } else {
    par2.innerHTML = '<strong>Non erano questi gli accordi!</strong>'
    parBlu.innerHTML ="<strong>You didn't passed the exam.</strong>"
  }


  const div3 = document.createElement('div')
  const sbagliate = document.createElement('h2')
  let rispSbagliate = questions.length - punteggio;
  sbagliate.innerHTML = 'Wrong' +'<br>' +'<strong>' +(rispSbagliate/questions.length)*100 +'</strong>' +'%';
  corpoCentrale.appendChild(div3);
  div3.appendChild(sbagliate)
  const par3 = document.createElement('p');
  par3.innerHTML = rispSbagliate +'/' +questions.length +' questions';
  div3.appendChild(par3);
  
}
