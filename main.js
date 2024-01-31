// ESERCIZIO 1:

// Dato un array di numeri, creare una funzione che restituisca la somma di tutti i numeri contenuti nell'array. Esempio: let array = [1, 5 ,7 ,12]; Output = 25;

// let array = [1, 5, 7, 12]

// function sum(arr){
//     let somma = arr.reduce((acc, numero)=> acc + numero);

//     return somma;
// }

// console.log(sum(array));



// ESERCIZIO 2:

// Scrivi un programma che dato un array di numeri, restituisca in output la media e tutti i valori minori della media. Esempio: Input: a = [3, 5, 10, 2, 8] Output: media = 5.6, valori minori = [3, 5, 2]


// let array = [3, 5, 10, 2, 8];

// let arraymin = []

// function media(arraynumerico){
//     let med = array.reduce((acc, numero)=> acc + numero) / array.length;

    
//     console.log(med);
// }
// media(array);

// function media(arr){
//     let med = array.reduce((acc, numero)=> acc + numero) / array.length;
//     arraymin = arr.filter((number)=> number < med);

// }
// media(array);

// console.log(arraymin);




// **ESERCIZIO 3:**

// Scrivi un programma che dati  2 array di 10 elementi interi casuali compresi tra 1 e 10, permetta di effettuare, una delle seguenti operazioni: 

// addizione

// sottrazione 

// moltiplicazione 

// divisione

// Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.

// Esempio: Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione" Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

// let a = []
// let b = []
// let c = []

// function random(){
//     for(let i = 0; i < 10; i++){
//         a.push(math.floor(math.random() * 10) +1);
//         b.push(math.floor(math.random() * 10) +1);
//     }
// }
// random ();

// console.log(a, b);

// //  ADDIZIONE

// function addizione(arr1, arr2){
//     for(let i= 0; i < arr1.lenght; i++){
//        c[i] = arr1[i] + arr2[i];
//     }
// }






// **ESERCIZIO 4: **

// Scrivere un programma che permetta di filtrare soltanto le parole all’interno di un array:

// let mixArray = [1, true, ‘hackademy’, 100, ‘Javascript’, false, null, ‘php’]

// il risultato dovra’ dare, let filtered = [‘hackademy’, ‘Javascript’, ‘php’]

// **HINT:** provate a filtrare in base al tipo di dato (operatore typeof)


// let mixArray = [1, true, 'hackademy', 100, 'Javascript', false, null, 'php']

// let filtered = [];

// function filtra(arr){
//     filtered = arr.filter((el)=> typeof el === 'string');
// }

// filtra(mixArray);

// console.log(mixArray);
// console.log(filtered);


// **EXTRA:**

//  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.

// **Nel controllo scarta gli spazi e i segni di punteggiatura**

//   Esempio:

//   Input: “i topi non avevano nipoti”

//   Output: TRUE

// Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando:
// str.replace(/\W/g, "")


// let string = prompt('inserisci qui la tua parola');
// let stringasenzaspazi = stringa.replace(/\W/g, "");
// console.log(stringasenzaspazi);

