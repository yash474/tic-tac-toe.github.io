// here we r exporting the game class
export default class Game{

    // initialize the game
    constructor(){
        console.log( "Mahadev in Game");
        this.turn="X";
        this.board=new Array(9).fill(null) ;
        // console.log( this.board );
    }

    // to implement the turn by turn moves
    nextTurn(){
        
        if( this.turn=="X") this.turn="O" ;
        else this.turn="X";
    }

    // after player make we have to update that move in board
    makeMove( i ){
        this.board[i]=this.turn ; // X || O
    }


}