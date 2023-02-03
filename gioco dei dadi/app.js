// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 



let btnUserElement = document.getElementById('btn-user')
let numberUserElement = document.getElementById('number-user')
let numberComputerElement = document.getElementById('number-computer')
let risultElement = document.getElementById('risultato')



btnUserElement.addEventListener('click', function () {
    let numUser = Math.floor(Math.random() * 6) + 1
    
    
    let numComputer = Math.floor(Math.random() * 6)
    console.log(numUser, numComputer)

    numberUserElement.innerHTML = numUser
    
    numberComputerElement.innerHTML = numComputer

    if (numUser > numComputer){
        console.log('hai vinto')
        risultElement.innerHTML = 'Hai vinto!!!!!'
    }
    else {
        console.log ('hai perso')
        risultElement.innerHTML = 'Hai Perso!!!!!'
    }
})

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
