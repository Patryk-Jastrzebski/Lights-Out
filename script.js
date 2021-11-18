var n;
var box;
var width;
var height;
var skyColor = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAIAAADbHrqYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFBSURBVHhe7dIxEQAhAAPB5/0bQBoWUMHggOs39VU7GXPtz54F/udSeAV4tR/w4tUEWu1fvJpAq/2LVxNotX/xagKt9i9eTaDV/sWrCbTav3g1gVb7F68m0Gr/4tUEWu1fvJpAq/2LVxNotX/xagKt9i9eTaDV/sWrCbTav3g1gVb7F68m0Gr/4tUEWu1fvJpAq/2LVxNotX/xagKt9i9eTaDV/sWrCbTav3g1gVb7F68m0Gr/4tUEWu1fvJpAq/2LVxNotX/xagKt9i9eTaDV/sWrCbTav3g1gVb7F68m0Gr/4tUEWu1fvJpAq/2LVxNotX/xagKt9i9eTaDV/sWrCbTav3g1gVb7F68m0Gr/4tUEWu1fvJpAq/2LVxNotX/xagKt9i9eTaDV/sWrCbTav3g1gVb7F68m0Gr/4tUEWn0A0i0DJrJ1HbkAAAAASUVORK5CYII=";
var blueColor = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAIAAADbHrqYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE8SURBVHhe7dIxDQAwDMTA8IcRdIHRUrjd0o+eTj+z10AA0mS/QF4mYHUXy8sErO5feZmA1f0rLxOwun/lZQJW96+8TMDq/pWXCVjdv/IyAav7V14mYHX/yssErO5feZmA1f0rLxOwun/lZQJW96+8TMDq/pWXCVjdv/IyAav7V14mYHX/yssErO5feZmA1f0rLxOwun/lZQJW96+8TMDq/pWXCVjdv/IyAav7V14mYHX/yssErO5feZmA1f0rLxOwun/lZQJW96+8TMDq/pWXCVjdv/IyAav7V14mYHX/yssErO5feZmA1f0rLxOwun/lZQJW96+8TMDq/pWXCVjdv/IyAav7V14mYHX/yssErO5feZmA1f0rLxOwun/lZQJW96+8TMDq/pWXCVjdv/IyAav7V14mYHX/yosEHtxxV478R6lVAAAAAElFTkSuQmCC";
var navyColor = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAYAAABUfC3PAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAEESURBVHhe7dExAcAgEMDAp0oxjR66ICLD3RIBWbPPHVK+V0JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJQgU4JMCTIlyJScmR/CAAL+AWABOwAAAABJRU5ErkJggg==";
var choice = 1;
var moves = (Math.round(Math.random()*10+20));
var listofMovesX = new Array(moves)
var listofMovesY = new Array(moves)
var boardSize =0;
var player = false;
function changeChoice(a) {
    choice = a;
    resizeBoard(boardSize)
}

function nextMove(i,j) {
    if (choice == 1) {
        changeColor(i, j);
        if (j - 1 >= 0) changeColor(i, j - 1);
        if (j + 1 < n) changeColor(i, j + 1);
        if (i - 1 >= 0) changeColor(i - 1, j);
        if ((j + 1 < n) && (i + 1 <n)) changeColor(i + 1, j +1);
        if (player == true){
            console.log("Ruch g["+ moves +"] X: " + listofMovesX[j] + " Y: " + listofMovesY[i]);
            listofMovesY[moves] = j;
            listofMovesX[moves] = i;
            moves = 1 + moves;
            console.log(listofMovesX)
            console.log(listofMovesY)
        }
//i = y, j = x +prawo +dol
    }
    if (choice == 2) {
        changeColor(i, j);
        if (j - 1 >= 0) changeColor(i, j - 1);
        if (j + 1 < n) changeColor(i, j + 1);
        if (i - 1 >= 0) changeColor(i - 1, j);
        if ((j - 1 >= 0) && (i + 1 <n)) changeColor(i + 1, j - 1);
        if (player == true){
            console.log("Ruch g["+ moves +"] X: " + listofMovesX[j] + " Y: " + listofMovesY[i]);
            listofMovesY[moves] = j;
            listofMovesX[moves] = i;
            moves = 1 + moves;
            console.log(listofMovesX)
            console.log(listofMovesY)
        }
    }
    if (choice == 3) {
        changeColor(i, j);
        if (j - 1 >= 0) changeColor(i, j - 1);
        if (j + 1 < n) changeColor(i, j + 1);
        if ((i - 1 >= 0) &&(j+1 <n)) changeColor(i - 1, j +1);
        if ((i - 1 >= 0) &&(j-1 >=0)) changeColor(i - 1, j -1);
        if (i + 1 < n) changeColor(i + 1, j);
        if (player == true){
            console.log("Ruch g["+ moves +"] X: " + listofMovesX[j] + " Y: " + listofMovesY[i]);
            listofMovesY[moves] = j;
            listofMovesX[moves] = i;
            moves = 1 + moves;
            console.log(listofMovesX)
            console.log(listofMovesY)
        }
    }

    checkResult();
}

function changeColor(i, j) {
    var img = document.getElementById("img" + i + j);
    if (box[i][j] == "1") {
        img.setAttribute("src", skyColor);
        box[i][j] = 2;
    }
    else if (box[i][j] == "2") {
        img.setAttribute("src", blueColor);
        box[i][j] = 0;
    }
    else {
        img.setAttribute("src", navyColor);
        box[i][j] = 1;
    }
}

function prepareTable() {
    player = false;
    box = new Array(n);
    for (i = 0; i < n; i = i + 1) {
        box[i] = new Array(n);
    }

    for (i = 0; i < n; i = i + 1) {
        for (j = 0; j < n; j = j + 1) {
            box[i][j] = 0;
        }
    }

    var square = document.getElementById("square");
    for (i = 0; i < n; i = i + 1) {
        for (j = 0; j < n; j = j + 1) {
            var img = document.createElement("img");
            img.setAttribute("id", "img" + i + j);
            img.setAttribute("data-x", i);
            img.setAttribute("data-y", j);
            img.setAttribute("src", blueColor);
            img.setAttribute("width", width);
            img.setAttribute("height", height);
            img.setAttribute("onClick", "javascript:nextMove(" + i + "," + j + ");");
            square.appendChild(img);
        }

        var br = document.createElement("br");
        square.appendChild(br);
    }
    console.log(moves);
    randomization();
}

function randomization() {
    player = false;
    for(i=0; i< moves; i++){
        var x = Math.round(Math.random()*(n-1))
        var y = Math.round(Math.random()*(n-1))

        listofMovesX[i] = x;
        listofMovesY[i] = y;
        nextMove(x,y);
        console.log("Rlist["+i+"] x: " + x + " y: " + y)
    }
    console.log(listofMovesX)
    console.log(listofMovesY)
    player = true;
}

async function solve() {
    player = false;
    console.log("Rozwiaz")

    for (a=0; a<2; a++) {
        for (i = 0; i < moves; i++) {

            console.log("list[" + i + "] x: " + listofMovesX[i] + " y: " + listofMovesY[i])
            nextMove(listofMovesX[i], listofMovesY[i])
            await new Promise(r => setTimeout(r, 50));
        }
    }
    player = true;
}

function resizeBoard(p) {
    boardSize = p;
    var board = document.getElementById("square");
    board.innerHTML = "";
    n = p;
    if (n<=5) {
        width = height = 50;
    } else {
        width =height = 35;
    }
    prepareTable();
}

function checkResult() {

    var val = box[0][0];
    var fail = 0;
    for (x = 0; x < n; x = x + 1) {
        for (y = 0; y < n; y = y + 1) {
            if (box[x][y] != val) {
                fail = 1;
            }
        }
    }
}