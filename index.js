let player = {
    name: "Yoseph",
    chips: 1000
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let newCardButton = document.querySelector("button:nth-of-type(2)")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    messageEl.classList.remove("win", "lose") // Remove previous classes
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        newCardButton.disabled = false
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        messageEl.classList.add("win") // Add win class
        newCardButton.disabled = true
    } else {
        message = "You're out of the game!"
        isAlive = false
        messageEl.classList.add("lose") // Add lose class
        newCardButton.disabled = true
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
