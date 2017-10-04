import React from 'react';

class GuessTheNumber extends React.Component {


    handleButtonClick (event) {

      if (this.refs.userGuess.value > this.props.numberToGuess) {
          alert("Too high");
      } else if (this.refs.userGuess.value < this.props.numberToGuess) {
          alert("Too low");
      } else {
          alert("You win!");
      }

    }

  render() {
    return (
    <div>
    <hr/>
        <p>Guess a number between 1 and 100</p>
        <input type="text" ref="userGuess"/>
        <button onClick={this.handleButtonClick.bind(this)}>Guess</button>
    <hr/>
    </div>

    );
  }
}

export default GuessTheNumber;


/*

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCaption from './ImageCaption.js';
import Layout from './Layout.js';
import GuessTheNumber from './GuessTheNumber.js';

var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

class App extends Component {

  render() {

    return (
      <div className="App">
        <h2>testing ImageCaption</h2>
        <ImageCaption source=" http://i.imgur.com/D8JWn.jpg " text="This is a kittenz!"/>
       <div> {
       imageList.map(item =>
           <ImageCaption source={item.source} text={item.text} key={item.id} />
       )}
       </div>


       <Layout>
          <h2>Testing Layout</h2>
          <main>
          <h2>About Us</h2>
          <p>We are <a href="https://facebook.github.io/react/">React</a> developers</p>
          </main>
        </Layout>

       <GuessTheNumber numberToGuess={50}
      // {Math.floor(Math.random()*100)}

       />

      </div>
    );
  }
}

export default App;

*/
