// MAIL
console.log('array')
// Crea un array con una lista di email (stringhe)
let emailArray = ['marcocarta@gmail.com', 'paolorossi@gmail.com', 'nicolablog@gmail.com',
'cartafoglio@gmail.com', 'arround@gmail.com', 'heartfree@gmail.com','maggiolino90@gmail.com']
console.log(emailArray)

console.log(emailArray.length - 1)

console.log(emailArray[3])

let nuovaMail = 'michelepiccolo@gmail.com'
emailArray.push(nuovaMail)
console.log(emailArray)

let numElement = emailArray.length
console.log(emailArray.length)

// Chiedi all’utente la sua email (con il prompt), controlla che sia nella lista di email,
let mailUser = prompt('Inserisci la tua mail')


// stampa un messaggio appropriato sull’esito del controllo.

let emailCorrect = document.getElementById('email-corretta')

for ( i = 0; i < numElement; i++) {
    let singleMail = emailArray[i]
    console.log(i, singleMail)
    
    if (singleMail === mailUser) {
        console.log('risposta esatta')
        emailCorrect.innerHTML = mailUser + ' ' + 'La tua mail è stata verificata ed è corretta!!'
    }
    else {
        emailCorrect.innerHTML = mailUser + ' ' + 'La mail inserita è errata :( Riprova...'
    }
}

    
        
        
        

        
    