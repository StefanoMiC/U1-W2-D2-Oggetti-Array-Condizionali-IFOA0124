// OGGETTI IN JS
// quando dobbiamo descrivere una qualche entità complessa, con proprietà e valori specifici

// quando creare variabili non è più sufficiente....
// const teacherName = "Stefano"
// const teacherSurname = "Miceli"

// possiamo pensare di descrivere una qualche entità attraverso un oggetto!

// un oggetto è composto da coppie chiave-valore
const teacher = {
  name: "Stefano",
  surname: "Miceli",
  age: 30,
  drivingLicense: null,
  gender: "M",
  hasWebcam: true,
  location: {
    region: "FVG",
    city: "Udine"
  },
  skills: ["HTML", "CSS", "JS"],
  "e-mail": "stefano@epicode.com"
};

// teacher = null; // non si può riassegnare il valore di una costante, ma si può modificare l'entità-oggetto nelle sue parti interne

console.log("teacher", teacher);

// come si accede alle proprietà degli oggetti?
// 1) DOT NOTATION - si può accedere agganciando un punto al nome dell'oggetto (per tutte le proprietà con nomi semplici e NON composti: es. caratteri speciali)

console.log("GENDER", teacher.gender);
console.log("CITY", teacher.location.city);

// 2) SQUARE BRACKET NOTATION - serve ad accedere a proprietà con caratteri speciali o valori dinamici
console.log("E-MAIL", teacher["e-mail"]);

const propertyName = "skills";
console.log(propertyName, teacher[propertyName]); // console.log("skills", teacher["skills"])
// propertyName viene PRIMA valutato (letto nel contenuto) e poi
// quel contenuto viene utilizzato nella ricerca della proprietà dell'oggetto

// const dynamicProperty = "school";
// const dynamicValue = "Epicode";

// const newObj = {
//   [dynamicProperty]: dynamicValue
// };
// console.log(newObj);

// per MODIFICARE un valore esistente:
// accedo alla proprietà da modificare e ne RIASSEGNO il valore (=)

teacher.drivingLicense = "B";
console.log("teacher", teacher);

// per CREARE una nuova proprietà
teacher.notes = "remotely teaching";
console.log(teacher);

// per ELIMINARE una o più proprietà
delete teacher.skills;
delete teacher.gender;
console.log(teacher);

// copiare un oggetto

// finché si tratta di primitive, queste vengono copiate senza problemi
let a = 20;
let b = a; // nel fare b = a, abbiamo preso il valore di a, COPIATO, e salvato dentro b

b = 30;

console.log(a);
console.log(b);

// non stiamo avendo a che fare con primitive! significa che se copio un oggetto in una variabile, JS per ottimizzare ci collega la seconda variabile
// allo STESSO oggetto
// const teacher2 = teacher; // MOLTO MALE!!! DA NON FARE MAAAAIIII per copiare un oggetto!

// METODO 1# CLONAZIONE OGGETTI SUPERFICIALE (di primo livello):

// abbiamo copiato tutte le proprietà di primo livello (non le referenze di secondo livello)
const teacher2 = Object.assign({}, teacher);
teacher2.name = "Giovanni";

// qui ci stiamo slegando dal riferimento a location di teacher1, clonandolo singolarmente, per poi assegnarlo a teacher2 come SUO nuovo oggetto location
teacher2.location = Object.assign({}, teacher.location);
// a questo punto modificare city ce lo farà cambiare solo du teacher2 e non su teacher1
teacher2.location.city = "Gorizia";
teacher2.location.region = "Friuli Venezia Giulia";

console.log("TEACHER", teacher);
console.log("TEACHER2", teacher2);

// METODO 2# CLONAZIONE PROFONDA tramite metodi JSON
const objStringified = JSON.stringify(teacher2);

const teacher3 = JSON.parse(objStringified);
teacher3.name = "Luca";
teacher3.location.city = "Roma";
teacher3.location.region = "Lazio";

console.log("TEACHER3", teacher3);

// METODO 3# con structuredClone()

const teacher4 = structuredClone(teacher2);
teacher3.name = "Paolo";
teacher3.location.city = "Milano";
teacher3.location.region = "Lombardia";
console.log("TEACHER4", teacher4);
