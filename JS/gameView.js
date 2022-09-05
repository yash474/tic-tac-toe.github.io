export default class GameView {

    constructor( ){
        console.log( " Mahadev in GameView")
    }

    updateBoard( game ){
        // console.log(" updateing the game boade in game view")
        // console.log(game.board) ;
        // game.board.forEach(element => {
        //     console.log(element);
        // });

        for( let itr=0 ; itr<game.board.length ; itr++){
            // console.log( game.board[itr]);
            // using "querySelector" we selects the class
            const tile=document.querySelector(`.board-tile[ data-index='${itr}']`) ;
            // console.log(tile);
            tile.textContent=game.board[itr]
        }
    }
}