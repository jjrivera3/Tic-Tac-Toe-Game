let playersTurn = 0;
let cells = document.querySelectorAll('.cells');
let messageBox = document.querySelector('.messagebox');
let gameOver = false;

//Add event listener for the cells
cells.forEach(function (cell) {
    cell.addEventListener('click', cellsClicked);
    cell.addEventListener('click', checkPlayersTurn);
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
    if (gameOver == false) {
        if (playersTurn % 2 == 0) {
            e.target.innerHTML = ' X ';
        } else {
            e.target.innerHTML = ' 0 ';
        }
    }
}

function checkWinner() {
    for (var i = 0; i < winningCombos.length; i++) {
        for (var j = 0; j < winningCombos.length; j++) {
            console.log(winningCombos[i][j]);
        }
    }
}


// Add increments of 1 to playersTurn variable to determine who's turn it is
// Once there are 9 clicks, alert that it's a tie
function checkPlayersTurn(e) {
    playersTurn++;
    if (playersTurn == 9) {
        messageBox.textContent = "It's a tie!";
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
        messageBox.textContent = "";
        playersTurn = 0
    }
}

checkWinner();
