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
        game.checkWin(board);
    };
    const getGameboard = ()=>{return board;}
    return {
        render,
        updateBoard,
        getGameboard,
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
        if(gameBoard.getGameboard()[id] != ""){
            return;
        }
        gameBoard.updateBoard(id,users[currentPlayer].mark);
        if(currentPlayer){
            currentPlayer = 0;
        }
        else{
            currentPlayer=1;
        }
        
    }
    const checkWin = (board)=>{
        winConditions = [[0,1,2],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
        for(let i=0;i<winConditions.length;i++){
            let [a,b,c] = winConditions[i];
            if(board[a] && board[a]==board[b] && board[b]==board[c]){
                alert(`${users[currentPlayer].name} Wins the match!!`);
            }
        }
    } 
    return {
        start,
        selectValue,
        checkWin
    }
})();

let startGame = document.querySelector("#start");
startGame.addEventListener("click",(e)=>{
    e.preventDefault();
    game.start();
});
