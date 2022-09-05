export default class GameView {

    constructor( ){
        // console.log( " Mahadev in GameView")
        this.upd_flg=false;
    }

    updateBoard( game ){
        // console.log(" updateing the game boade in game view")
        // console.log(game.board) ;
        // game.board.forEach(element => {
        //     console.log(element);
        // });

        // calling the update player so it will show whoes turn is this
        
        // console.log( " hoooo  "+ game.win_flg) ;
        if( this.upd_flg ){
            return ;
        }

        for( let itr=0 ; itr<game.board.length ; itr++){
            // console.log( game.board[itr]);
            // using "querySelector" we selects the class
            const tile=document.querySelector(`.board-tile[ data-index='${itr}']`) ;
            // console.log(tile);

            tile.classList.remove("winner-tile")
            
            tile.textContent=game.board[itr]
            // now we have to give the X && O the color of their headers 
            // so what we will do is , "X" && "O" are in the tile so assign the current tile to that corresponding active class the the value of "X" && "O" will have same coloring
            let tileType = game.board[itr]=='X' ? "tile-x" : "tile-o" ;            
            // console.log( tyleType)
            // now we will assign the curent tile to a new runtime created class

            tile.innerHTML=`<span class="${tileType}">${game.board[itr] ? game.board[itr] : ""}</span>`

            if( game.win_flg ){
                // console.log( "Jai Mahakal  "+game.cordinate);
                // now if the game class cordinate contains current tile number the chane itr color by assigining the new class to it 
                for( let i=0 ; i<3 ; i++) {
                    if( game.cordinate[i]==itr){
                        // console.log( "YYYY "+itr + tile)
                        // tile.classList.add("winner-tile")
                        tile.classList.add('winner-tile');
                        
                    }                    
                }
            }
        }
        if( game.win_flg ){
            this.upd_flg=true ;
        }
    }

    updateTurn( game ){
        let playerX=document.querySelector(".player-x")
        let playerO=document.querySelector(".player-o")
        
        // console.log( playerX )
        // console.log( playerO )
        
        // before making the player active we have to first make both inactive and the make one of them active.. otherwise in new move both will become active same time
        playerO.classList.remove('active');
        playerX.classList.remove('active');

        // now we will make the current turn player as active by applying the active class to it and other one will be inactive 
        if( game.turn=='X' ){
            // apply active class to player X
            playerX.classList.add( 'active') ;
        }
        else{
            // apply active class to player O
            playerO.classList.add( 'active') ;
        }
                 
    }
}