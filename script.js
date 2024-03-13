function player(name, mark) {
    return { name, mark }
}

let player1 = player('John', 'X');
let player2 = player('Bob', 'O');

let gameBoard = (function () {
    //DEFINE & INITIALISE THE BOARD AREA WITH EMPTY STRING
    let board = {
        // 1: "", 2: "", 3: "",
        // 4: "", 5: "", 6: "",
        // 7: "", 8: "", 9: ""
        1: "X", 2: "O", 3: "X",
        4: "X", 5: "X", 6: "",
        7: "X", 8: "O", 9: "O"
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

    //CHECK GAME CONDITION

    return { 
        board,
        currentPlayer,
        updateGameBoard
    }
    })();

    //CALL GAME CONDITION FUNCTION
    // gameCondition();



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
        // const isAllMarked = (board) => {
        //     const values = Object.values(board);
        //     return values.every((currentValue) => currentValue !== "");
        // }
        const values = Object.values(board);
        const isAllMarked = values.every((currentValue) => currentValue !== "");
        if (isAllMarked) {
            alert('ITS A TIE');
        }
        //IF IT'S FILLED THEN ANNOUNCES A TIE
    }            
}


// console.log(player1);
// console.log(player2);

// gameBoard.updateGameBoard(6, player1);
// gameBoard.updateGameBoard(5, player2);
// gameBoard.updateGameBoard(6, player2);
console.log(gameBoard.board);

// gameCondition(gameBoard.board, player1, player2);