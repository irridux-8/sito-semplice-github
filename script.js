function checkWin() {
    const resultElement = document.getElementById('result-message');
    
    // Genera un numero casuale da 1 a 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // Probabilità dell'1% (vince solo se esce esattamente 1)
    if (randomNumber === 1) {
        resultElement.textContent = "VITTORIA REALE! Hai trovato il Token!";
        resultElement.className = "win";
    } else {
        resultElement.textContent = "Peccato! Token non trovato. Riprova!";
        resultElement.className = "lose";
    }
}