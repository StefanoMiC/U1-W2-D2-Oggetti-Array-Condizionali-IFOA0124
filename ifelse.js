// condizionale if/else è un costrutto che ci permette di abilitare un blocco di codice in determinate situazioni,
// può succedere ad esempio in base al valore di una variabile, o alla presenza di un elemento particolare di un array, o qualsivoglia motivo stabilito da noi..

// sintassi if/else

// if(condizione) {
//     blocco di codice qualora la condizione si verifichi
// } else {
//     blocco di codice per condizione non verificata
// }

// i blocchi di codice sono mutualmente esclusivi, se ne può attivare uno alla volta, mai entrambi!
let num = 51;

const animals = ["dog"];

// possiamo usare un if semplicemente per "proteggere" un pezzo di codice dal non eseguirsi quando non opportuno
if (num === 51) {
  console.log("il numero è esattamente 51");
}

// oppure possiamo creare due diverse condizioni possibili (o una o l'altra, mai entrambe eseguite insieme)
if (num > 50) {
  // condizione vera
  alert("il numero è maggiore di 50");
} else {
  // condizione falsa
  alert("il numero è inferiore 50");
}

// o posso creare una serie di possibili condizioni che al verificarsi scateneranno l'esecuzione del proprio blocco di codice (potrebbe anche non verificarsi nessuna)
if (animals.length === 0) {
  // array vuoto
  animals.push("cat");
  console.log("CASO true", animals);
} else if (animals.length > 0) {
  const removed = animals.shift();
  console.log("REMOVED", removed);

  animals.push(removed.toUpperCase());

  console.log("CASO array > 0", animals);
}

// l'else si scatenerà nel caso in cui NESSUNA condizione precedente si è verificata

// in questo locale entreranno solo persone alte almeno 160, con occhi verdi e capelli castani

const eyesColor = "green";
const height = 145;
const hairColor = "brown";

if (eyesColor === "green" && height >= 160 && (hairColor === "brown" || hairColor === "light-brown")) {
  alert("vai benissimo tu puoi entrare!");
} else {
  if (eyesColor !== "green") {
    alert(`il colore dei tuoi occhi: ${eyesColor} non è quello che cerchiamo`);
  } else if (height < 160) {
    alert("non sei abbastanza alto per entrare");
  } else if (hairColor !== "brown" || hairColor !== "light-brown") {
    alert("non hai i capelli castani");
  } else {
    alert("non puoi entrare, non raggiungi i criteri richiesti");
  }
}

// TERNARY OPERATOR - forma contratta di un if/else

let student = {
  name: "Piero",
  hasWebcam: false
};

// let admitted;

// if (student.hasWebcam) {
//   admitted = true;
// } else {
//   admitted = false;
// }

// col ternario il valore di admitted è già deciso al momento della creazione della variabile stessa
// TERNARIO: condizione ? condizione vera : condizione falsa
const admitted = student.hasWebcam ? "Sì" : "No";
console.log("Is student admitted?", admitted);

const message = eyesColor === "green" ? "lo studente ha gli occhi verdi" : "lo studente ha gli occhi di un altro colore, non verdi";

// VALORI che in un contesto booleano ritornano TRUE (TRUTHY)
// {}, [], 42, "0", "false", new Date(), -42, 12n, 3.14, -3.14, Infinity, -Infinity;
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy

const truthy = "stefano" ? "VERO" : "FALSO";

// VALORI che in un contesto booleano ritornano FALSE (FALSY)
// null, undefined, false, NaN, 0, -0, 0n, ""
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
const falsy = "" ? "VERO" : "FALSO";

console.log("truthy", truthy);
