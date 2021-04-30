const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        // cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    }
}

function changeColor(element) {
    element.style.backgroundColor = "black";
}

makeRows(16, 16);

var squares = container.querySelectorAll('div');

for (let i = 0; i < squares.length; i ++) {
    squares[i].addEventListener("mouseover", function() {
        changeColor(squares[i]);
        });
}