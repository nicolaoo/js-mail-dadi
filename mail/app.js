// MAIL
console.log('array')
// Crea un array con una lista di email (stringhe)
const emailElement = ['marcocarta@gmail.com', 'paolorossi@gmail.com', 'nicolablog@gmail.com',
'cartafoglio@gmail.com', 'arround@gmail.com', 'heartfree@gmail.com','maggiolino90@gmail.com']
console.log(emailElement)

console.log(emailElement.length)

console.log(emailElement.length - 1)

console.log(emailElement[3])

let nuovaMail = 'michelepiccolo@gmail.com'
emailElement.push(nuovaMail)
console.log(emailElement)

// Chiedi all’utente la sua email (con il prompt), controlla che sia nella lista di email,
// stampa un messaggio appropriato sull’esito del controllo.