// ESERCIZIO 1 (Funzionante)

// let n = 2;
// let m = "4";

// function variabili(variabile1 , variabile2) {
//     if (variabile1 == variabile2) {
//         console.log(`I numeri sono uguali`);
//     }else{
//         console.log(`I numeri non sono uguali`);
//     }
// }

// console.log(variabili (n,m));

// ESERCIZIO 2 (Funzionante)

// let N = 30;

// function multipli(numero) {
//     for (let i = 1; i <= numero; i ++) {
//         if ( i % 15 === 0 ) {
//             console.log("FizzBuzz");
//         }else if ( i % 5 === 0) {
//             console.log("Buzz");
//         }else if ( i % 3 === 0){
//             console.log("Fizz");
//         }else{
//             console.log(i);
//         }
//     }
    
// }

// multipli(N);

// ESERCIZIO 3 (funzionante)

    // let numbers = [2, 10, 5, 8, 1];
    // let media = (numbers.reduce ((acc, number) => acc + number)) / numbers.length;
    // console.log(media);

    // let final = numbers.filter ((number) => number < media);
    // console.log(final);

// ESERCIZIO 4 (funzionante)

// let numbers = [2,4,8,12,14,16,1];
// let divisore = 2;

// function numeri_divisibili(numbers, divisore) {
//     let esercizio = numbers.filter ((number) => number % divisore === 0);
//     return esercizio;
// }

// console.log(numeri_divisibili(numbers, divisore));

// ESERCIZIO 5 (funzionante)


// let x = ["Nike", 6, "7", 18];

// function esempio(valore) {
//     if (x.includes(valore)) {
//         return true
//     }else {
//         return false
//     }
    
// }

// console.log(esempio("Nike"));

// CERCA E APPROFONDISCI: map - filter - includes - reduce 