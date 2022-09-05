// here we are importing the "Game" class of game.js 
import Game from "./Game.js"
import GameView from "./GameView.js"



let game=new Game();
let gameView=new GameView();

gameView.updateTurn( game );
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
    let flg=game.makeMove( i );
    if( flg ){
        gameView.updateBoard( game ) ;
        game.nextTurn();  
        gameView.updateTurn(game) ;      
    }
    else{
        gameView.updateBoard( game ) ;
        // game.win_flg=true ;
    }
    
}

// functionality for start new game
document.querySelector(".restart").addEventListener("click" , ()=> {
    console.log( " NEW GAME TRIGGER ");
    // console.log( game.board );
    // for( let itr=0 ; itr<9 ; itr++ ){
    //     game.board[itr]=null ;
    // }

    // or
    game = new Game () ;
    gameView.upd_flg=false;
    gameView.updateBoard( game ) ;
    gameView.updateTurn(game) ;
    // console.log( game.board );

    
})


