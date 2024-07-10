// definizione della funzine
 function checkPalindroma(string) {
    // definisco la variabile che dovra contenere la parola al contrario
    let check_palindroma = '';

    // prendo la parola passata come parametro e la splitto la inverto e riunisci i caratteri
    check_palindroma = string.split('').reverse().join('');

    // verifico se il contenuto della variabile e uguale alla string
    if (check_palindroma.toLowerCase() === string.toLowerCase()){
        console.log('La stringa e palindroma');
    }
    else {
        console.log('La stringa non e palindroma')
    }
 }

 // dischiaro la variabile che dovra contenere la parola dell'utente e gli assegno il prompt
 let word = prompt('Inserisci la parola da verificare')

 // chiamo la funzione 
 check_palindroma(word.toLowerCase());