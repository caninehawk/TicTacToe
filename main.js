const gameBoard = (()=>{
    let board = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        let box = document.querySelector(".gameBoard");
        board.forEach((square,index)=>{
            box.innerHTML += `<div class = "square" id="square-${index}">${square}</div>`;
        });
    };
    return {
        render
    }
})();
const createPlayer = ((name,value)=>{
    return{
        name,
        value
    }
})();

const game = (()=>{
    const start = ()=>{
        let users = [
            createPlayer(document.querySelector("#p1").value,"X"),
            createPlayer(document.querySelector("p2").value,"O")
            ];
            gameBoard.render();
    };
    return {
        start
    }
})
let startGame = document.querySelector("#start");
startGame.addEventListener("click",(e)=>{
    e.preventDefault();
    game.start();
});