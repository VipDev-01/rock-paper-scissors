//////////////////////////////////////////////// ////////////////////////////////////// ////////////////////////////////////////////
//////////////////////////////////////////////// GLOBAL VARIABLES //////////////////////////////////////////////////////////////////
//////////////////////////////////////////////// ////////////////////////////////////// ////////////////////////////////////////////

let para = document.querySelector('.winner');
let winner = '';
let playerScore = 0;
let computerScore = 0;

//////////////////////////////////////////////// ////////////////////////////////////// ////////////////////////////////////////////
//////////////////////////////////////////////// GETTING PLAYER AND COMPUTER SELECTIONS ////////////////////////////////////////////
//////////////////////////////////////////////// ////////////////////////////////////// ////////////////////////////////////////////

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


function getWinner(playerchoice, computerchoice) {
    if (playerchoice == computerchoice) {
        console.log('Tie!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
        alert('Its a Tie! Round will be played again!')
        playround(getPlayerSelection, getComputerChoice);

    } else if (playerchoice == 'rock') {
        if (computerchoice == 'paper') {
            console.log('Computer Won!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
            return 'computer'
        } else {
            console.log('Player Won!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
            return 'player'
        }
    } else if (playerchoice == 'scissors') {
        if (computerchoice == 'rock') {
            console.log('Computer Won!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
            return 'computer'
        } else {
            console.log('Player Won!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
            return 'player'
        }
    } else if (playerchoice == 'paper') {
        if (computerchoice == 'scissors') {
            console.log('Computer Won!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
            return 'computer'
        } else {
            console.log('Player Won!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
            return 'player'
        }
    }

}

function playround(player, computer) {

    let playerchoice = player()
    let computerchoice = computer()

    winner = getWinner(playerchoice, computerchoice)

}

function getRounds() {
    const InpRnd = document.getElementById("rounds");
    const r = InpRnd.value;
    return r
  }


function reset() {
    playerScore = 0;
    computerScore = 0;
    para.textContent = 'SCORE: Player: ' + playerScore + ' ' + 'Computer: ' + ' ' + computerScore
}

function game() {
    reset()
    let rounds = getRounds();
    for (let x = 0; x < rounds; x++) {

        playround(getPlayerSelection, getComputerChoice)

        if (winner == 'computer') {
            computerScore++  
        }
        if (winner == 'player') {
            playerScore++
        }
        }

    if (playerScore > computerScore) {
        console.log ('Player Wins!')
    } else (console.log('Computer Wins!'))

    para.textContent = 'SCORE: Player: ' + playerScore + ' ' + 'Computer: ' + ' ' + computerScore
}



