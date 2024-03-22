const cells = [];
for (i= 0; i <= 8; i++) {
    cells[i] = document.querySelector('#cell-'+i)
}
const body = document.querySelector('body');
const btnStart = document.querySelector('#btn-start');
const btnReset = document.querySelector('#btn-reset');
const statusBar = document.querySelector('.status');
const player1Label = document.querySelector('.player1');
const player2Label = document.querySelector('.player2');
const buttonsLabel = document.querySelector('.buttons');

function player(name, mark) {
    return { name, mark }
}
let player1 = player('Player 1', 'X');
let player2 = player('Player 2', 'O');

let gameBoard = (function () {
    //DEFINE & INITIALISE THE BOARD AREA WITH EMPTY STRING
    let board = {
        1: "", 2: "", 3: "",
        4: "", 5: "", 6: "",
        7: "", 8: "", 9: ""
    }

    let currentPlayer = player1;
    let started = false; 

    //FUNCTION THAT ALLOWS THE BOARD TO BE UPDATED AND DETERMINES WHOSE TURN NEXT
    const updateGameBoard = (position, player) => {
        if (player === player1) {
            board[position] = player1.mark;
            // gameCondition(board, player1.mark);
            // currentPlayer = player2;
            //TODO INDICATE ON FRONTEND THAT IT'S PLAYER 2'S TURN
        }  
        else {
            board[position] = player2.mark;
            // gameCondition(board, player2.mark);
            // currentPlayer = player1;

            //TODO INDICATE ON FRONTEND THAT IT'S PLAYER 1'S TURN
        }
    }
    return { 
        board,
        currentPlayer,
        started,
        updateGameBoard
    }
    })();

function gameCondition(board, mark) {
//CHECK FOR WINNING CONDITION
    if (board[1] ===  mark && board[2] === mark && board[3] === mark) {
        // alert(`WINNER WINNER CHICKEN DINNER - ${mark} = Winner - |1|2|3| ${board[1]}|${board[3]}|${board[3]}`);
        if (mark === 'X') {
            gameBoard.started = false;
            statusBar.textContent = 'Player 1 is the Winner!';
            resultIndicator(player1);
        }
        else {
            statusBar.textContent = 'Player 2 is the Winner!';
            resultIndicator(player2);
        }
    }
    else if (board[4] ===  mark && board[5] === mark && board[6] === mark) {
        gameBoard.started = false;
        if (mark === 'X') {
            statusBar.textContent = 'Player 1 is the Winner!';
            resultIndicator(player1);
        }
        else {
            statusBar.textContent = 'Player 2 is the Winner!';
            resultIndicator(player2);
        }
    }
    else if (board[7] ===  mark && board[8] === mark && board[9] === mark) {
        gameBoard.started = false;
        if (mark === 'X') {
            statusBar.textContent = 'Player 1 is the Winner!';
            resultIndicator(player1);
        }
        else {
            statusBar.textContent = 'Player 2 is the Winner!';
            resultIndicator(player2);
        }
    }
    else if (board[1] ===  mark && board[4] === mark && board[7] === mark) {
        gameBoard.started = false;
        if (mark === 'X') {
            statusBar.textContent = 'Player 1 is the Winner!';
            resultIndicator(player1);
        }
        else {
            statusBar.textContent = 'Player 2 is the Winner!';
            resultIndicator(player2);
        }
    }
    else if (board[2] ===  mark && board[5] === mark && board[8] === mark) {
        gameBoard.started = false;
        if (mark === 'X') {
            statusBar.textContent = 'Player 1 is the Winner!';
            resultIndicator(player1);
        }
        else {
            statusBar.textContent = 'Player 2 is the Winner!';
            resultIndicator(player2);
        }
    }
    else if (board[3] ===  mark && board[6] === mark && board[9] === mark) {
        gameBoard.started = false;
        if (mark === 'X') {
            statusBar.textContent = 'Player 1 is the Winner!';
            resultIndicator(player1);
        }
        else {
            statusBar.textContent = 'Player 2 is the Winner!';
            resultIndicator(player2);
        }
    }
    else if (board[1] ===  mark && board[5] === mark && board[9] === mark) {
        gameBoard.started = false;
        if (mark === 'X') {
            statusBar.textContent = 'Player 1 is the Winner!';
            resultIndicator(player1);
        }
        else {
            statusBar.textContent = 'Player 2 is the Winner!';
            resultIndicator(player2);
        }
    }
    else if (board[3] ===  mark && board[5] === mark && board[7] === mark) {
        gameBoard.started = false;
        if (mark === 'X') {
            statusBar.textContent = 'Player 1 is the Winner!';
            resultIndicator(player1);
        }
        else {
            statusBar.textContent = 'Player 2 is the Winner!';
            resultIndicator(player2);
        }
    }
    else {
        const values = Object.values(board);
        const isAllMarked = values.every((currentValue) => currentValue !== "");
        if (isAllMarked) {
            statusBar.textContent = 'TIE!'
            gameBoard.started = false;
            
        }
    }            
}

function resultIndicator(player) {
    player1Label.textContent = '';
    player2Label.textContent = '';
    if (player === player1) {
        body.style.background = '#59D5E0';
        player1Label.style.background = '#59D5E0';
        player2Label.style.background = '#59D5E0';
        buttonsLabel.style.background = '#59D5E0';
    }
    if (player === player2) {
        body.style.background = '#F4538A';
        player1Label.style.background = '#F4538A';
        player2Label.style.background = '#F4538A';
        buttonsLabel.style.background = '#F4538A';
    }
    if (player === 'tie') {
        body.style.background = 'grey';
        player1Label.style.background = 'grey';
        player2Label.style.background = 'grey';
        buttonsLabel.style.background = 'grey';
    }
}

btnStart.addEventListener('click', function() {
    gameBoard.started = true;
    cells.forEach(cell => {
        cell.style.backgroundColor = '#F5DD61';
    });
    btnStart.style.display = 'none';
    btnReset.style.display = 'block';
})


btnReset.addEventListener('click', function() {
    const result = confirm('Are you sure?');
    if (result === true) {
        location.reload();
    }
})

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function() {
        if (gameBoard.started === true) {
            if (cells[i].textContent === '') {
                if (gameBoard.currentPlayer === player1) {
                    cells[i].textContent = 'X';
                    cells[i].style.color = '#59D5E0';
                    gameBoard.updateGameBoard(i+1, player1);
                    gameCondition(gameBoard.board, player1.mark);
                    gameBoard.currentPlayer = player2;
                }
                else {
                    cells[i].textContent = 'O';
                    cells[i].style.color = '#F4538A';
                    gameBoard.updateGameBoard(i+1, player2);
                    gameCondition(gameBoard.board, player2.mark);
                    gameBoard.currentPlayer = player1;
                }
            }
        }
    })
} 

//TEST CASE 1: BOARD NOT FILLED - X WON
// gameBoard.updateGameBoard(1, player1);
// gameBoard.updateGameBoard(2, player2);
// gameBoard.updateGameBoard(3, player1);
// gameBoard.updateGameBoard(4, player2);
// gameBoard.updateGameBoard(5, player1);
// gameBoard.updateGameBoard(6, player2);
// gameBoard.updateGameBoard(9, player1);
// console.log(gameBoard.board);

//TEST CASE 2: BOARD NOT FILLED - O WON
// gameBoard.updateGameBoard(1, player1);
// gameBoard.updateGameBoard(5, player2);
// gameBoard.updateGameBoard(9, player1);
// gameBoard.updateGameBoard(3, player2);
// gameBoard.updateGameBoard(4, player1);
// gameBoard.updateGameBoard(2, player2);
// gameBoard.updateGameBoard(8, player1);
// gameBoard.updateGameBoard(7, player2);
// console.log(gameBoard.board);

//TEST CASE 3: BOARD FILLED - TIE
// gameBoard.updateGameBoard(9, player1);
// gameBoard.updateGameBoard(3, player2);
// gameBoard.updateGameBoard(5, player1);
// gameBoard.updateGameBoard(1, player2);
// gameBoard.updateGameBoard(7, player1);
// gameBoard.updateGameBoard(8, player2);
// gameBoard.updateGameBoard(2, player1);
// gameBoard.updateGameBoard(6, player2);
// gameBoard.updateGameBoard(4, player1);
// console.log(gameBoard.board);


// gameCondition(gameBoard.board, player1, player2);

//// 1. Start with empty object and use updateGameBoard method to replicate a typical play sequence 
//// 2. Create rudimentary frontend: grid, player/mark and header
// TODO 4. Make grid cell clickable and only once
//// 3. Add start/reset button
// TODO 5. Reset board on winning/tie
// TODO 5. Indicate whose turn it is
// TODO 5. Update game header on winning/tie and player name
// TODO 6. Styling - apply different shading to filled grid
// TODO 7. Styling - apply it to player and game header areas
//// 8. Mobile responsive




