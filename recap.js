// TIPI DI DATO PRIMITIVI:
// string - insieme di caratteri racchiusi da apici (o virgolette) - "" '' `` (win: alt + 96 tast num.)
// number - valori numerici SENZA APICI (diverso da) !== "3"
// boolean - true / false
// undefined
// null

let fullName = "Manuel Dell'Oste";

// il backtick definisce un template literal che ci permette anche di andare accapo, oltre che utilizzare valori dinamici nella stringa stessa
let multiLineStr = `Ciao Ragazzi mi chiamo ${fullName},
benvenuti in questa lezione`;

// in questo caso dobbiamo invece comporre la stringa manualmente concatenando i valori dinamici
let normalString = "Ciao Ragazzi mi chiamo " + fullName;

console.log(multiLineStr);

// controllare se un'operazione è andata a buon fine
let num1 = "Epicode" * 2;
let num2 = 40 * 3;

console.log("is num1 NaN?", isNaN(num1));
console.log("is num2 NaN?", isNaN(num2));
// console.log(typeof NaN);

// operatori matematici
// + - * / %

console.log("3 è divisibile per sé stesso", 3 % 3); // ritorna il resto della divisione
console.log("è 64 un numero pari?", 64 % 2 === "0"); // torna 0 se pari

// operatori di comparazione
// < <= > >=

console.log("50 > 100", 50 > 100); // false
console.log("50 < 50", 50 < 50); // false
console.log("50 <= 50", 50 <= 50); // true

// operatori di uguaglianza
// == != (uguaglianza e disuguaglianza non strette, SCONSIGLIATO)
// === !== (uguaglianza e disuguaglianza strette)

let fullNameLower = fullName.toLowerCase();
console.log(fullNameLower);
let fullNameUpper = fullName.toUpperCase();
console.log(fullNameUpper);

console.log(fullName.charAt(0) !== "m"); // true
console.log(fullName.toLocaleLowerCase().charAt(0) === "m"); // true

// Operatori logici
// && - AND concatena due o più condizioni in un'unica espressione,
// la cui veridicità sarà confermata SOLAMENTE se TUTTE le condizioni sono verificate (TRUE && TRUE = TRUE)
// || - OR concatena due o più condizioni in un'unica espressione,
// la cui veridicità sarà confermata quando ALMENO UNA delle condizioni sarà verificata (FALSE || TRUE = TRUE)
// ! - NOT trasforma il valore booleano nel suo opposto !false = true

const eyeColor = "brown";
console.log("Op.Logico1: ", 5 < 10 && eyeColor === "brown");
console.log("Op.Logico2: ", 10 < 10 && eyeColor === "brown");
console.log("Op.Logico3: ", 10 < 10 || eyeColor === "brown");
console.log("Op.Logico4: ", (10 < 10 || eyeColor === "brown") && eyeColor !== "black");
// possibile raggruppare le condizioni per dargli una priorità(o ordine) di valutazione specifica

// LET vs CONST
let randNum; // solo variabili dichiarate con let possono essere inizializzate senza valore
randNum = 10;
randNum = null;

const myNum = 45;
// myNum = 30; // ERROR: assignment to constant variable

// var è function scoped (sconsigliato) - ha un ambito contenuto solo dalle funzioni

// let & const sono block scoped - hanno un ambito contenuto da un qualsiasi blocco (if, cicli.. ecc)

let teacherName = "Stefano";

if (true) {
  let teacherName = "Riccardo";
  console.log("INTERNO", teacherName);
}
console.log("ESTERNO", teacherName);
