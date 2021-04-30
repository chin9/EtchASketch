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
    let num = Math.floor(Math.random() * 7)

    switch (num) {
        case 0: element.style.backgroundColor = "red";
                break;

        case 1: element.style.backgroundColor = "orange";
                break;

        case 2: element.style.backgroundColor = "yellow";
                break;

        case 3: element.style.backgroundColor = "green";
                break;

        case 4: element.style.backgroundColor = "blue";
                break;

        case 5: element.style.backgroundColor = "indigo";
                break;

        default: element.style.backgroundColor = "purple";
                break;


    }
    // element.style.backgroundColor = "black";
}

function addEventListesnerForEachSquare(squares) {
    for (let i = 0; i < squares.length; i ++) {
        squares[i].addEventListener("mouseover", function() {
            changeColor(squares[i]);
            });
    }
}

function clearAll(squares) {
    for (let i = 0; i < squares.length; i ++) {
        squares[i].style.backgroundColor = "white";
    }
}

function deleteAll() {
    container.innerHTML = '';
}

makeRows(16, 16);

var squares = container.querySelectorAll('div');

addEventListesnerForEachSquare(squares);

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function() {
    clearAll(squares);
    var size = prompt("Enter a new size (max: 100):");
    if (size > 100) {
        var size = prompt("Enter a new size (max: 100):");
    }
    deleteAll();
    makeRows(size, size);
    squares = container.querySelectorAll('div');
    addEventListesnerForEachSquare(squares);
})