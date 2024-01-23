// ARRAY
// è una collezione di elementi (possibilmente) SIMILI

const students = ["Francesco", "Ilaria", "Marco", "Domenico"];
const numbers = [0, 28, 9, 105, 44];
const booleans = [true, false, false, true];
const movies = [{ title: "Spiderman" }, { title: "Batman" }, { title: "Wonder Woman" }];

// evitiamo gli array misti
// const midex = [true, "Stefano", 20, null]

// per accedere ad un valore utilizzeremo la sua POSIZIONE nell'array
// per accedere ad una posizione l'unico modo è utilizzare il suo INDICE (valore numerico a partire da 0)
// la prima posizione è sempre 0 in un array

// per accedere ad una posizione di un'array useremo le parentesi quadre: es. nomeArray[index]
const francesco = students[0];
const ilaria = students[1];

console.log("pos 0", francesco);
console.log("pos 1", ilaria);
console.log("pos 2", students[2]);
console.log("pos 3", students[3]);
console.log("pos 4", students[4]); // undefined
console.log("lungezza array (length)", students.length); // dimensione dell'array con numero in base 1 (si conta da 1 come di consueto)
console.log("last", students[students.length - 1]); // per ottenere l'ultimo uso la length che mi dà un valore in base 1 e sottraggo 1 per avere un indice in base 0

// .push(...newElements) aggiunge un elemento alla fine dell'array
students.push("Davide", "Manuel");
console.log(students);

// .pop() elimina l'ultimo elemento
console.log(numbers);
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
console.log(numbers);

// .shift() elimina il primo elemento
const deleted = students.shift();
console.log(deleted);
console.log(students);

// .unshift(...newElements) aggiunge un elemento in prima posizione
students.unshift("Chiara");
console.log(students);

// .sort() ordina l'array di stringhe in base al primo carattere
students.sort();
console.log(students);

// .slice(start, end) serve a sezionare una porzione di un array esistente (end è escluso) - ritorna un nuovo array corrispondente alla selezione fatta
const numbersCopy = numbers.slice(); // uno slice senza start o end copierà gli elementi di primo livello
numbersCopy.pop();
numbersCopy.shift();
console.log(numbers);
console.log(numbersCopy);

const slicedArr = numbers.slice(1, 4);
console.log(slicedArr);

// .splice(startIndex, deleteCount, newElement - opzionale) elimina uno o più elementi a partire da una posizione indicata (modifica l'array originale)

const animals = ["pigs", "goats", "sheep"];
// animals.splice(1, 1); // elimina un elemento e non aggiunge niente
animals.splice(1, 0, "horses"); // aggiunge un elemento senza eliminare niente
animals.splice(3, 1, "swans"); // sostituisce un elemento con un altro grazie al delete count 1

console.log(animals);

// https://doesitmutate.xyz/
// per verificare se un metodo muta l'originale oppure no
// se muta, varrebbe forse la pena copiarlo con un metodo come lo .slice() senza valori specificati
