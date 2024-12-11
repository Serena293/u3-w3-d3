// Creiamo il file .ts
// apriamo il terminale
// e scriviamo tsc index.ts per convertire il file in js
//e colleghiamo il nuovo file che ha creato vs code all'HTML
// se nel terminale scriviamo tsc -w index.js la pagina si aggiornerà automaticamente
// ctrl  + c per fermare il watching (nel terminale)

//Pratica
// 1) I tipi primitivi principali in TypeScript sono:
// - string
// - number
// - boolean
// - undefined
// - null
// - any 
// - never

//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript

const myName = 'Serena'
const myNameAgain: string = 'Serena'
// console.log(myName)
// console.log(myNameAgain);
;

const myAge = 31
const myAgeAgain: number = 31
// console.log(myAge);
// console.log(myAgeAgain);



const studing = false
const studingTS: boolean = false
// console.log(studing);
// console.log(studingTS);



//3) Tipizza il parametro della seguente funzione:
// const greet = (name) => {  return "Ciao " + name }
const greet = (name:string) => {  return "Ciao " + name }
console.log(greet('Serena'))

// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {  return a + b }

const sum = (a: number, b: number): number =>  {  return a + b }

console.log(sum(5,5));

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%).
//  Usa i tipi appropriati.

let iva = 0.22
const addIVA = (p:number): number=> {return p + p * iva }
console.log(addIVA(100));

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
