var playersTurn = 0;
let cells = document.querySelectorAll('.cells');
let messageBox = document.querySelector('.messagebox');
var gameOver = false;

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
    if (playersTurn % 2 == 0) {
        e.target.innerHTML = ' X ';
    } else {
        e.target.innerHTML = ' 0 ';
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

    

