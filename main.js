const gameBoard = (()=>{
    let board = ["", "", "", "", "", "", "", "", ""];
    const updateBoard = (id,value) =>{
        board[id] = value;
        render();
    }
    const render = () => {
        let box = document.querySelector(".gameBoard");
        box.innerHTML = ""; // Clear previous content
        board.forEach((square,index)=>{
            box.innerHTML += `<div class = "square" id="square-${index}">${square}</div>`;
        });
        let square = document.querySelectorAll(".square");
        square.forEach((sq)=>{
            sq.addEventListener("click",game.selectValue);
        })
    };
    return {
        render,
        updateBoard
    }
})();

const createPlayer = ((name,mark)=>{
    return{
        name,
        mark
    }
});

const game = (()=>{
    let users=[];
    let currentPlayer;
    let gameOver;
    const start = ()=>{
        users = [
            createPlayer(document.querySelector("#p1").value,"X"),
            createPlayer(document.querySelector("#p2").value,"O")
        ];
        currentPlayer = 0;
        gameOver = false;
        gameBoard.render();
        let square = document.querySelectorAll(".square");
        square.forEach((sq)=>{
            sq.addEventListener("click",selectValue);
        })
    };
    const selectValue = (e)=>{
        let id = parseInt(e.target.id.split("-")[1]);
        gameBoard.updateBoard(id,users[currentPlayer].mark);
        if(currentPlayer){
            currentPlayer = 0;
        }
        else{
            currentPlayer=1;
        }
        
    }
    return {
        start,
        selectValue
    }
})();

let startGame = document.querySelector("#start");
startGame.addEventListener("click",(e)=>{
    e.preventDefault();
    game.start();
});
