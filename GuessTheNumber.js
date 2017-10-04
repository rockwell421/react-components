import React from 'react';

class GuessTheNumber extends React.Component {
    
    _handleButtonClick(event) {
        if(this.refs.userGuess.value > this.props.numberToGuess) {
            alert("too high");
        } else if (this.refs.userGuess < this.props.numberToGuess) {
            alert("too low");
        } else {
            alert("you win!");
        }
    }

  render() {
    return (
    <div>
        <hr />
            <p>Guess the number between 1 and 100</p>
            <input type="text" ref="userGuess" />
            <button onClick={this._handleButtonClick.bind(this)}>Guess</button>
        <br />
        <hr />
      </div>
    );
  }
}

export default GuessTheNumber;