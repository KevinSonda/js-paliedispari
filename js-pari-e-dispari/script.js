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

