let square = document.querySelectorAll('.square');

square.forEach(function(square){
    square.addEventListener('click', squareClicked);
});

function squareClicked(e) {
    e.target.innerHTML = ' X ';

}