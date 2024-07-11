// definisco la funzione che mi genera un numero random
function generateRandomNumber() {
    return Math.floor(Math.random() * 5 + 1);
}

// definisco la funzione che verifica se la somma e pari o dispari 
function checkEvenOrOdd(sum) {
    // verifico se la somma e pari o dispari: se pari restituisco la stringa "pari" se dispari restituisco la stringa "dispari"
    if (sum % 2 === 0) {
        return 'pari';
    }

    return 'dispari';
}

// dichiaro la variabile con il prompt per contenere pari o dispari
let even_or_odd = prompt('Inserisci "pari" o "dispari"');

//controlliamo che il valore sia corretto 
while (even_or_odd != 'pari' && even_or_odd != 'dispari') {
    even_or_odd = prompt('Devi inserire un valore tra "pari" e "dispari" reinserisci di nuovo')
}

//dichiaro la variabile che conterra il valore numerico compreso tra 1 e 5 inserito tramite prompt
let number = prompt('Inserisci un valore compreso tra 1 e 5');
//controlliamo che il valore inserito sia un numero tra 1 e 5
console.log(number);
while (number < 1 || number > 5 || isNaN(number)){
    number = parseInt(prompt('Devi inserire un valore compreso tra 1 e 5. Reinseriscilo di nuovo'));
}

//genero il numero per il computer richiamando la funzione generateRandomNumber
let pc_number = generateRandomNumber();
console.log(pc_number);

//eseguo la somma dei due numeri 
let sum = number + pc_number;
console.log(sum);

// verifico che il risultato restituito dalla funzione abbiano lo stesso valore 
if (even_or_odd.toLowerCase() === checkEvenOrOdd(sum)) {
    console.log('Hai vinto')
}
else {
    console.log('Hai perso')
}
