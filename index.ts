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

const concatStrings = (str1:string, str2:string): string => str1 + str2

console.log(concatStrings('Ciao a', ' tutti'));

// 7) Cos'è un Type Union e come si scrive?
//Da typescript.org:A union type is a type formed from two or more other types, representing values that may be any one of those types.
// We refer to each of these types as the union’s members.
// ovvero è un modo per  combinare insieme due tipi di types. Il valore può essere uno qualsiasi di questi types ed è detto 'union's members'

// si usa | per separe i types.

const textNuberBoolean = (exemple: string | number | boolean) => {
console.log(exemple)
}

textNuberBoolean('Una stringa')
textNuberBoolean(2025)
textNuberBoolean(true)

// 8) Crea una variabile che possa contenere un numero, null o undefined.

let myVariable: number | null | undefined; //let perhè ho cambiato il valore 3 volte nelle righe successive

myVariable = 1
myVariable = null
myVariable = undefined

//9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type DayOfWeek = | 'Lunedì' | 'Martedì' | 'Mercoledì' | 'Giovedì' | 'Venerdì' | 'Sabato' | 'Domenica'

let today: DayOfWeek
//today può essere solo uno dei giorni della settimana

// 10) Tipizza il seguente array di numeri nei due modi possibili:

// const numbers = [1, 2, 3]

const array: number[] = [1, 2, 3]
const newArray: Array<number> = [1, 2, 3]

//11) Crea una tupla per definire un array di 5 elementi, 
//i primi 3 devono essere stringhe e gli ultimi due numeri.
 
//Tuple type è una sorta di array che sa esattamente quanti elementi andrà a contenere e di che tipo

type myFirstTuple = [string, string, string, number, number]

//12) Qual è la differenza tra type e interface?
//Sono due modi per definire tipi personalizzati
// Hanno una diversa sintassi 

// interface Person {
//   name: string;
//   age: number;
// }

//interface serve a definire un OGGETTO o una CLASSE.
//interface non supporta le union type
// interface può essere estesa 

//type può rappresentare anche altri valori 

// type Person = {
//     name: string;
//     age: number;
//   };
  
//   type StringOrNumber = string | number;
  
//13) Definisce un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".


