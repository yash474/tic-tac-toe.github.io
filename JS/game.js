// here we r exporting the game class
export default class Game {

    // to store the winning cordinate
    cordinate 
    
    // initialize the game
    constructor() {
        console.log("Mahadev in Game");
        this.turn = "X";
        this.win_flg=false ;
        this.board = new Array(9).fill(null);
        // console.log( this.board );
    }

    // to implement the turn by turn moves
    nextTurn() {

        if (this.turn == "X") this.turn = "O";
        else this.turn = "X";
    }

    // after player make we have to update that move in board
    makeMove(i , gameView , game ) {
        if (this.board[i] || this.win_flg ) {
            return false;
        }
        this.board[i] = this.turn; // X || O
        
        let flg=this.findWinningCombinations();
        // console.log(flg +" "+this.win_flg)
        if (flg) {
            console.log("win")
            // gameView.updateTurn(game) ;
            this.win_flg=true ;              
            return false;                    
        }

        // write code for checking draw of game
        // if( game is draw )
        //     do this 

        // in either case of game won or game win stop the game
        return true;        
    }

    findWinningCombinations() {
        const winningCombinations = [
            // all winning combinations
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [0, 4, 8],

        ]
        let flg=false ;
        // checking for winning combination
        winningCombinations.forEach(combination => {
            let a = combination[0]
            let b = combination[1]
            let c = combination[2]
            

            // console.log( a+" "+b+" "+c );

            // below condition --> if a is not null && a==b && a==c then current player won
            if (this.board[a] && this.board[a] == this.board[b] && this.board[a] == this.board[c]) {
                // the player won
                console.log(this.board[a] + "  " + this.board[b] + "  " + this.board[c])
                console.log(a + " " + b + " " + c)
                console.log("Player " + this.board[a] + " WON 😎")                
                console.log("return true executed") 
                this.cordinate=combination ;
                console.log( this.cordinate) 
                   
                flg=true;
            }

        });

        if( flg ){
            return true ;
        }
        //not won 
        // console.log("return true not executed")
        return false;
    }


}