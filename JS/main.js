// here we are importing the "Game" class of game.js 
import Game from "./Game.js"
import GameView from "./GameView.js"



let game=new Game();
let gameView=new GameView();

// gameView.updateBoard( game );
// // console.log( "Har Har Mahadev ");
// console.log( game.board );
// console.log( " My turn is ", game.turn);
// game.makeMove( 1 );
// game.nextTurn();
// console.log( " My turn is ", game.turn);
// game.makeMove( 3 );
// game.nextTurn();
// game.makeMove( 8 );
// console.log( game.board );  
// gameView.updateBoard( game );

// "document.querySelectorAll" is used to select all elt of came class
let tiles=document.querySelectorAll(".board-tile") ;
tiles.forEach( (tile) => {
    tile.addEventListener( "click" , () => {
        onTileClick( tile.dataset.index);
    })
})

// when we click the tile it will trigger onTileClick function
function onTileClick( i ) {
    // we will call make move
    // then change the turn to next person
    // then update the board 
    // console.log(i);
    game.makeMove( i );
    gameView.updateBoard( game ) ;
    game.nextTurn();
}


