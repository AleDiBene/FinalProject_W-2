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
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for(let i = 0; i < pets.length; i++){
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
   pets.sort()
   console.log(pets)


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
  pets.sort()
   console.log(pets.reverse())

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let element = pets.shift(); // 'dog'
pets.push(element);
// stavo impazzendo perchè non vedevo dog alla FinalizationRegistry, poi ho capito che lui prende il pets modificato dell'ultimo esercizio
console.log(pets);


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
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

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 'ciao'; 
}

console.log(cars);


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  brand: 'Volkswagen',
  model: 'Golf',
  color: 'white',
  trims: ['GTI', 'R-line', 'Comfortline'],
});

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
  for (let i = 0; i < cars.length; i++) {
    justTrims.push(cars[i].trims[0]);
  }

  console.log(justTrims)


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  const position = cars[i].color.charAt(0).toLowerCase(); 
  if (position === 'b') {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;

while(i < numericArray.length){
  console.log(numericArray[i]);
   if(numericArray[i] === 32){
    break;
  }
  i++;
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/const charactersArray = ['g', 'n', 'u', 'z', 'd'];

const position = [];

for (let i = 0; i < charactersArray.length; i++) {
  let letter = charactersArray[i];

  switch (letter) {
    case 'a':
      position.push(1);
      console.log(1);
      break;
    case 'b':
      position.push(2);
      console.log(2);
      break;
    case 'c':
      position.push(3);
      console.log(3);
      break;
    case 'd':
      position.push(4);
      console.log(4);
      break;
    case 'e':
      position.push(5);
      console.log(5);
      break;
    case 'f':
      position.push(6);
      console.log(6);
      break;
    case 'g':
      position.push(7);
      console.log(7);
      break;
    case 'h':
      position.push(8);
      console.log(8);
      break;
    case 'i':
      position.push(9);
      console.log(9);
      break;
    case 'j':
      position.push(10);
      console.log(10);
      break;
    case 'k':
      position.push(11);
      console.log(11);
      break;
    case 'l':
      position.push(12);
      console.log(12);
      break;
    case 'm':
      position.push(13);
      console.log(13);
      break;
    case 'n':
      position.push(14);
      console.log(14);
      break;
    case 'o':
      position.push(15);
      console.log(15);
      break;
    case 'p':
      position.push(16);
      console.log(16);
      break;
    case 'q':
      position.push(17);
      console.log(17);
      break;
    case 'r':
      position.push(18);
      console.log(18);
      break;
    case 's':
      position.push(19);
      console.log(19);
      break;
    case 't':
      position.push(20);
      console.log(20);
      break;
    case 'u':
      position.push(21);
      console.log(21);
      break;
    case 'v':
      position.push(22);
      console.log(22);
      break;
    case 'w':
      position.push(23);
      console.log(23);
      break;
    case 'x':
      position.push(24);
      console.log(24);
      break;
    case 'y':
      position.push(25);
      console.log(25);
      break;
    case 'z':
      position.push(26);
      console.log(26);
      break;
    default:
      console.log('Carattere non trovato');
      break;
  }
}
console.log(charactersArray)
console.log(position);
