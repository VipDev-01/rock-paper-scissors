function getPlayerSelection() {
    let selection = ''
    do {
        selection = prompt('Choose: rock/paper/scissors');
        selection = selection.toLowerCase()
        if (selection != 'rock' && selection != 'paper' && selection != 'scissors') {
            alert('Invalid selection. Choose between rock / paper / scissors')
        }
    } while (selection != 'rock' && selection != 'paper' && selection != 'scissors')

    return selection
}

function getComputerChoice() {

    let choices = ['rock', 'paper', 'scissors'];
    let choice = ''
    let random = Math.random()

    random = random * 3;
    random = Math.floor(random);

    choice = choices[random]

    return choice

}

function playround(player, computer) {

    let playerchoice = player()
    let computerchoice = computer()

    winner(playerchoice, computerchoice)

}

function winner(playerchoice, computerchoice) {
    if (playerchoice == computerchoice) {
        console.log('Tie!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
        playround(getPlayerSelection, getComputerChoice);

    } else if (playerchoice == 'rock') {
        if (computerchoice == 'paper') {
            console.log('Computer Won!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
            computerWon = true;
            playerWon = false;
        } else {
            console.log('Player Won!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
            playerWon = true;
            computerWon = false;
        }
    } else if (playerchoice == 'scissors') {
        if (computerchoice == 'rock') {
            console.log('Computer Won!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
            computerWon = true;
            playerWon = false;
        } else {
            console.log('Player Won!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
            playerWon = true;
            computerWon = false;
        }
    } else if (playerchoice == 'paper') {
        if (computerchoice == 'scissors') {
            console.log('Computer Won!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
            computerWon = true;
            playerWon = false;
        } else {
            console.log('Player Won!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
            playerWon = true;
            computerWon = false;
        }
    }

}

function getRounds() {
    const InpRnd = document.getElementById("rounds");
    const r = InpRnd.value;
    return r
  }

  let para = document.querySelector('.winner');

let playerScore = 0;
let computerScore = 0;
let computerWon = false;
let playerWon = false;

function game() {
    //reset()
    let rounds = getRounds();
    for (let x = 0; x < rounds; x++) {
        computerWon = false
        playerWon = false

        playround(getPlayerSelection, getComputerChoice)

        if (computerWon) {
            computerScore++  
        }
        if (playerWon) {
            playerScore++
        }
        }

    if (playerScore > computerScore) {
        console.log ('Player Wins!')
    } else (console.log('Computer Wins!'))

    // let message = 'SCORE: Player: ' + playerScore + ' ' + 'Computer: ' + ' ' + computerScore'
    para.textContent = 'SCORE: Player: ' + playerScore + ' ' + 'Computer: ' + ' ' + computerScore
}


function reset() {
    playerScore = 0;
    computerScore = 0;
    para.textContent = 'SCORE: Player: ' + playerScore + ' ' + 'Computer: ' + ' ' + computerScore
}



// console.log('SCORE: Player: ' + playerScore + ' ' + 'Computer: ' + ' ' + computerScore)





