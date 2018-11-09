let playersTurn = 0;
let cells = document.querySelectorAll('.cells');
let messageBox = document.querySelector('.messagebox');
let gameOver = false;

//Add event listener for the cells
cells.forEach(function (cell) {
    cell.addEventListener('click', cellsClicked);
});


// Set array of winning combinations
let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// Alternate between players
function cellsClicked(e) {
    if (gameOver == true) {
        clearBoard();
        return;
    }
    if (playersTurn % 2 == 0) {
        e.target.textContent = ' X ';
    } else {
        e.target.textContent = ' 0 ';
    }
    //Run the function to check who turn it is every click
    checkPlayersTurn();
    //Run function to check if their is a winner every click
    checkWinner();
}




function checkWinner() {
    for (var i = 0; i < winningCombos.length; i++) {
        let xsum = 0;
        let osum = 0;
        // Copy of winning combos that we are iterating through
        let winIndex = winningCombos[i];
        for (var j = 0; j < winIndex.length; j++) {
            if(cells[winIndex[j]].textContent == ' X '){
                xsum++;
            } 
            if(cells[winIndex[j]].textContent == ' 0 '){
                    osum++;

            }
        }

            if(xsum == 3){
                messageBox.textContent = "X is the Winner!";
                gameOver = true;
            } else if(osum == 3){
                messageBox.textContent = "0 is the Winner!";
                gameOver = true;
            }
    }
}



// Add increments of 1 to playersTurn variable to determine who's turn it is
// Once there are 9 clicks, alert that it's a tie
function checkPlayersTurn() {
    playersTurn++;
    if (playersTurn == 9) {
        messageBox.textContent = "It's a tie!";
        gameOver = true;
    }
}

// Add event listener for reset button]
let resetButton = document.querySelectorAll('#resetButton');
resetButton.forEach(function (reset) {
    reset.addEventListener("click", clearBoard);
});

// Reset board when reset button is clicked
function clearBoard() {
    for (i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
    messageBox.textContent = "";
    playersTurn = 0;
    gameOver = false;
}


