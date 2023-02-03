// MAIL
console.log('array')
// Crea un array con una lista di email (stringhe)
const emailElement = ['marcocarta@gmail.com', 'paolorossi@gmail.com', 'nicolablog@gmail.com',
'cartafoglio@gmail.com', 'arround@gmail.com', 'heartfree@gmail.com','maggiolino90@gmail.com']
console.log(emailElement)

console.log(emailElement.length - 1)

console.log(emailElement[3])

let nuovaMail = 'michelepiccolo@gmail.com'
emailElement.push(nuovaMail)
console.log(emailElement)

let numElement = emailElement.length
console.log(emailElement.length)

// Chiedi all’utente la sua email (con il prompt), controlla che sia nella lista di email,
let mailUser = prompt('Inserisci la tua mail')


// stampa un messaggio appropriato sull’esito del controllo.

// for ( i = 0; i < numElement; i++) {
// console.log(i, numElement, 'questo è il ciclo')

let emailCorrect = document.getElementById('email-corretta')

    if (emailElement === mailUser){
        emailCorrect.innerHTML = mailUser + '' + 'La tua mail è stata verificata ed è corretta!!'
        // console.log('risposta esatta')
    } else {
        emailCorrect.innerHTML = mailUser + '' + 'La mail inserita è errata :( Riprova...'
        // console.log('risposta errata')
    }
// }