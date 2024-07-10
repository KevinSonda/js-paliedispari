Palindroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma

1 - Creao un prompt che permette l'inserimento della parola da parte dell'utnete
2 - Dichiaro la funzione checkPalindroma
3 - All'interno della funzione dichiaro una variabile che conterra l'inverso della parola inserita dall'utente 
4 - La stringa passata della funzione la scompongo con split
5 - Inverto l'ordine con il metodo reverse
6 - Riunisco le lettere attraverso il metodo join
7 - Verifico de la parola generata e uguale a quella inserita dall'utente
7.1 - ? se sono uguali => la stringa e palindorma
7.2 - : Altrimenti la stringa non e palinmdroma

Pari e Dispari
L’utente inserisce prima  "pari" o "dispari" poi inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

1 - Definisco la funzione generateRandomNumber
1.1 - Restituisci il valore randomico generato attraverso la concatenazione delle funzioni Math.floor, Math.random 
2 - Definisco la funzione checkEvenOrOdd
2.1 - Controllo che l'operatore resta con la somma pari e 0
2.2 - ? SE e zero => restituisco la stringa pari
2.3 - :  Altrimenti restituisco la stringa dispari
3 - Dichiaro una variabile che conterra il valore pari o dispari inserito dall'utente 
4 - Dichiaro una variabile che conterra il vaolre numerico compreso tra 1 e 5 inserito dall'utente
5 - Dichiaro una variabile che contiene la somma dei due numeri inseriti 
6 - Chiamo la funzione passandogli il valore contenuto nella variabile somma
7 - Verifico se il valore restituito e uguale a quello inserito dall'utente 
7.1 - ? Se sono entrambi pari o entrambi dispari => l'utente ha vinto 
7.2 - : ALtrimenti ha perso 
