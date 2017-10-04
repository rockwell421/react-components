//Ziad's code

import React, {Component} from 'react';

class YouClicked extends Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0,
      timesReset: 0
    }
    //this code runs only once up here instead of inside the <div> for better performance
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleClick() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }
  handleReset() {
    this.setState({
      timesClicked: 0,
      timesReset: this.state.timesReset + 1
    });
  }
  render() {
    //store in variables to make them easier to call
    var times = this.state.timesClicked;
    var reset = this.state.timesReset;

    return (
     
      <div>
      <hr />
        <p>
          <button onClick={this.handleClick} type="button">CLICK ME!</button>
          <button onClick={this.handleReset} type="button">RESET!</button>
        </p>
        <p>
          {
            times === 0 ? 'You never clicked' :
            times === 1 ? 'You clicked once' :
            times === 2 ? 'You clicked twice' :
            `You clicked ${times} times`
          }
        </p>
        {
          reset === 0 ? null :  //don't print anything if reset value is 0
          <p>
            {
              reset === 1 ? 'You reset once' :
              reset === 2 ? 'You reset twice' :
              `You reset ${reset} times`
            }
          </p>

        }
      </div>
    )
  }
}

export default YouClicked;