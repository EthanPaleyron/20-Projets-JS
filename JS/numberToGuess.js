function guessNumber(number) {
    let playerGuess;
    const numberToGuess = Math.ceil(Math.random() * number);

    prompt(`Devine le nombre qui est entre 1 et ${number} 🙃`);
    
    while (playerGuess != numberToGuess) {
        playerGuess = prompt(`Mauvaise réponse😕 (entre 1 et ${number})`);
    }
    
    alert(`Bien joué ! 😆 
le nombre étais bien ${numberToGuess}!`);
}

guessNumber(5);