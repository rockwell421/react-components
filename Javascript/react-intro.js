
import React, { Component } from 'react';

class Timer extends component {
  constructor() {
    super();
    //set the state as an object (so it can be called on later)
    this.state = {

      timer: 0
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        timer: this.state.timer + 1
      });
    }, 1000);
  }

  render() {
    return (
      <div class="timer">
        <span>{this.timer}</span>
        </div>
    );
  }
}

export default Timer;




/*

  var labelStyles = {
    border: '1px solid black',
    backgroundColor: 'pink'
  };

  var MyLabel = React.createClass({
    render: function () {
      // return React.createElement('div', {style: labelStyles}, this.props.text);
      return <div style={labelStyles}>{this.props.text}</div>;
    }
  });

  // var firstLabel = React.createElement(MyLabel);

  var listOfLabels = (
    <ul>
      <li>
      <MyLabel text="First Name" />
      </li>
      <li>
      <MyLabel text="Second Name" />
      </li>
    </ul>
  );


  // var listOfLabels = React.createElement(
  //     'ul',
  //     null,
  //     React.createElement(
  //         'li',
  //         null,
  //         React.createElement(
  //             MyLabel,
  //             {text: "FIRST LABEL"}
  //         )
  //     ),
  //     React.createElement(
  //         'li',
  //         null,
  //         React.createElement(
  //             MyLabel,
  //             {text: "SECOND LABEL"}
  //         )
  //     )
  // );

  console.log(firstLabel);

//let's us use the virtual DOM elements and render them to DOM elements
//takes two parameters: a React element, a DOM element (container where you dump your content into)
  ReactDOM.render(listOfLabels, document.getElementById('app'));

//runs the code on the DOM

*/
