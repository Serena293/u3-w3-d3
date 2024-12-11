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
var myName = 'Serena';
var myNameAgain = 'Serena';
var myAge = 31;
var myAgeAgain = 31;
// console.log(myAge);
// console.log(myAgeAgain);
var studing = false;
var studingTS = false;
// console.log(studing);
// console.log(studingTS);
//3) Tipizza il parametro della seguente funzione:
// const greet = (name) => {  return "Ciao " + name }
var greet = function (name) { return "Ciao " + name; };
console.log(greet('Serena'));
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {  return a + b }
var sum = function (a, b) { return a + b; };
console.log(sum(5, 5));
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%).
//  Usa i tipi appropriati.
var iva = 0.22;
var addIVA = function (p) { return p + p * iva; };
console.log(addIVA(100));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var concatStrings = function (str1, str2) { return str1 + str2; };
console.log(concatStrings('Ciao a', ' tutti'));
// 7) Cos'è un Type Union e come si scrive?
//Da typescript.org:A union type is a type formed from two or more other types, representing values that may be any one of those types.
// We refer to each of these types as the union’s members.
// ovvero è un modo per  combinare insieme due tipi di types. Il valore può essere uno qualsiasi di questi types ed è detto 'union's members'
// si usa | per separe i types.
var textNuberBoolean = function (exemple) {
    console.log(exemple);
};
textNuberBoolean('Una stringa');
textNuberBoolean(2025);
textNuberBoolean(true);
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var myVariable; //let perhè ho cambiato il valore 3 volte nelle righe successive
myVariable = 1;
myVariable = null;
myVariable = undefined;
var today;
//today può essere solo uno dei giorni della settimana
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
var array = [1, 2, 3];
var newArray = [1, 2, 3];
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
