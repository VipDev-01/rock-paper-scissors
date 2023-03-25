function getPlayerSelection () {
    
    let selection = prompt('Choose: rock/paper/scissors');

    return selection
}

function getComputerChoice () {

    let choices = ['rock','paper','scissors'];
    let choice = ''
    let random = Math.random()

    random = random * 3;
    random = Math.floor(random);

    choice = choices[random]

    return choice

}

function playround (player,computer) {
    
    let playerchoice = player()
    let computerchoice = computer()

    winner(playerchoice,computerchoice)

}

function winner(playerchoice,computerchoice) {
    if (playerchoice == computerchoice) {
        console.log('Tie!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)

    } else if (playerchoice == 'rock') {
        if (computerchoice == 'paper') {
            console.log('Computer Won!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
        } else {
            console.log('Player Won!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
        }
    } else if (playerchoice == 'scissor') {
        if (computerchoice == 'rock') {
            console.log('Computer Won!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
        } else {
            console.log('Player Won!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
        }
    } else if (playerchoice == 'paper') {
        if (computerchoice == 'scissor') {
            console.log('Computer Won!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
        } else {
            console.log('Player Won!: ' + 'Player Choice: ' + playerchoice + '   ' + 'Computer Choice: ' + computerchoice)
        }
    }

    }

let bestof = 3

for (let x = 0; x < bestof; x++) {
    playround(getPlayerSelection,getComputerChoice)
}












