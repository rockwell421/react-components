/*
Steps
-User will have 5 tries to guess the number 
-Display: "Too high", "Too low", "You win!" depending on if the user guesses correctly
-User will also be shown a list of their guesses, as well as the number of remaining guesses.
-If the guesses are expired before the user wins, the interface is changed to a simple "YOU LOSE" and we show the winning number.
-there will be a button labeled "NEW GAME". Pressing this button will reset the game.
*/

import React, {Component} from 'react';

class GuessingGame extends React.Component {
    
    constructor(props) {
    super(props)
    this.state = {
        gameStatus: '',
        numberToGuess: this.props.numberToGuess,
        guessesRemaining: 5,
        message: ""
    }
    
    this._handleGuessButton = this._handleGuessButton.bind(this);
    this._handleNewGame = this._handleNewGame.bind(this);
  }
  
  
    _handleGuessButton(event) {
        
        event.preventDefault();
        
        let guess = +this.refs.userGuess.value;
        let mysteryNum = this.props.numberToGuess;
    
      this.setState({
          guessesRemaining: this.state.guessesRemaining - 1
      })
      
        if(guess > mysteryNum) {
            this.setState({
                numberToGuess: mysteryNum,
                gameStatus: 'playing',
                message: "Your number is too high"
            })
            
        } 
        else if (this.refs.userGuess.value < this.props.numberToGuess) {
            this.setState({
                numberToGuess: mysteryNum,
                //gameStatus: 'playing',
                message: "Your number is too low"
            })
            
        }
        else if(guess == mysteryNum){
            this.setState({
                numberToGuess: mysteryNum,
                //gameStatus: 'playing',
                //guessesRemaining: guess - 1,
                message: "You win!"
            })
        }
        else {
            //else should be used for error handling else something went wrong
            this.setState({
                message: "Uh oh, something went wrong"
            })
           
        }
  }
  
    _handleNewGame() {
        this.setState({
            guessesRemaining: 5,
            gameStatus: "playing",
            message: ""
        });
    }
    
    _messageStatus = () =>{
        return(
            <div>
                <p>{"Game status " + this.state.message}</p>
                <p>{"You have "+ this.state.guessesRemaining +" guesses remaining"}</p>
            </div>
        )
    }
    
      _componentDidMount(){
        this._handleNewGame();
    }
  
  render() {
      
    return (
    <div>
        <div>
            <hr />
                <h2>Guess The Number Between 1 and 100</h2>
                <input type="number" ref="userGuess" />
                <button onClick={this._handleGuessButton}>Guess</button>
                
                {this.state.message ? this._messageStatus() : ""}
       </div>
        
        <div>
            <button onClick={this._handleNewGame.bind(this)}>New Game</button>
        </div>
    </div>
      
    );
  }
}

export default GuessingGame;

