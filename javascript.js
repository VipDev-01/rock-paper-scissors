//////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////// GLOBAL VARIABLES //////////////////////////////////////////////////////////////////
//////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////////

let para = document.querySelector('.winner');
let winner = '';
let playerScore = 0;
let computerScore = 0;


//////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////// ROUND PLAY ////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////////


function playround(player, computer) {

    let playerchoice = player()
    let computerchoice = computer()

    winner = getWinner(playerchoice, computerchoice)
}

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

//////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////// GETTING WINNER ////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////////


function getWinner(playerchoice, computerchoice) {
    if (playerchoice == computerchoice) {
        console.log('Tie!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
        return 'tie'

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


//////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////// GETTING ROUNDS TO PLAY ////////////////////////////////////////////////////////////
//////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////////


function getRounds() {
    const InpRnd = document.getElementById("rounds");
    const r = InpRnd.value;
    return r
  }


//////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////// GAME AND RESET ////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////////

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

        if (winner == 'tie') {
            x--
        }
        if (winner == 'computer') {
            computerScore++  
        }
        if (winner == 'player') {
            playerScore++
        }
        }

    if (playerScore > computerScore) {
        console.log ('Player Wins!')
    } else if (computerScore > playerScore) {
        console.log('Computer Wins!')
    } 
        para.textContent = 'SCORE: Player: ' + playerScore + ' ' + 'Computer: ' + ' ' + computerScore
    }






