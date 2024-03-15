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

    //FUNCTION THAT ALLOWS THE BOARD TO BE UPDATED AND DETERMINES WHOSE TURN NEXT
    const updateGameBoard = (position, player) => {
        if (player === player1) {
            board[position] = player1.mark;
            gameCondition(board, player1.mark);
            currentPlayer = player2;
        }  
        else {
            board[position] = player2.mark;
            gameCondition(board, player2.mark);
            currentPlayer = player1;
        }
    }
    return { 
        board,
        currentPlayer,
        updateGameBoard
    }
    })();

function gameCondition(board, mark) {
//CHECK FOR WINNING CONDITION
    if (board[1] ===  mark && board[2] === mark && board[3] === mark) {
        alert(`WINNER WINNER CHICKEN DINNER - ${mark} = Winner - |1|2|3| ${board[1]}|${board[3]}|${board[3]}`);
    }
    else if (board[4] ===  mark && board[5] === mark && board[6] === mark) {
        alert(`WINNER WINNER CHICKEN DINNER - ${mark} = Winner - |4|5|6| ${board[4]}|${board[5]}|${board[6]}`);
    }
    else if (board[7] ===  mark && board[8] === mark && board[9] === mark) {
        alert(`WINNER WINNER CHICKEN DINNER - ${mark} = Winner - |7|8|9| ${board[7]}|${board[8]}|${board[9]}`);
    }
    else if (board[1] ===  mark && board[4] === mark && board[7] === mark) {
        alert(`WINNER WINNER CHICKEN DINNER - ${mark} = Winner - |1|4|7| ${board[1]}|${board[4]}|${board[7]}`);
    }
    else if (board[2] ===  mark && board[5] === mark && board[8] === mark) {
        alert(`WINNER WINNER CHICKEN DINNER - ${mark} = Winner - |2|5|8| ${board[2]}|${board[5]}|${board[8]}`);
    }
    else if (board[3] ===  mark && board[6] === mark && board[9] === mark) {
        alert(`WINNER WINNER CHICKEN DINNER - ${mark} = Winner - |7|8|9| ${board[3]}|${board[5]}|${board[8]}`);
    }
    else if (board[1] ===  mark && board[5] === mark && board[9] === mark) {
        alert(`WINNER WINNER CHICKEN DINNER - ${mark} = Winner - |1|5|9| ${board[1]}|${board[5]}|${board[9]}`);
    }
    else if (board[3] ===  mark && board[5] === mark && board[7] === mark) {
        alert(`WINNER WINNER CHICKEN DINNER - ${mark} = Winner - |3|5|7| ${board[3]}|${board[5]}|${board[7]}`);
        alert(player.name);
    }
    else {
        const values = Object.values(board);
        const isAllMarked = values.every((currentValue) => currentValue !== "");
        if (isAllMarked) {
            alert('ITS A TIE');
        }
    }            
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
gameBoard.updateGameBoard(1, player1);
gameBoard.updateGameBoard(5, player2);
gameBoard.updateGameBoard(9, player1);
gameBoard.updateGameBoard(3, player2);
gameBoard.updateGameBoard(4, player1);
gameBoard.updateGameBoard(2, player2);
gameBoard.updateGameBoard(8, player1);
gameBoard.updateGameBoard(7, player2);
console.log(gameBoard.board);

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
// TODO 2. Create rudimentary frontend: grid, player/mark and header
// TODO 3. Add start/reset button
// TODO 4. Make grid cell clickable and only once
// TODO 5. Reset board on winning/tie
// TODO 5. Update game header on winning/tie and player name
// TODO 6. Styling - apply different shading to filled grid
// TODO 7. Styling - apply it to player and game header areas
// TODO 8. Mobile responsive




