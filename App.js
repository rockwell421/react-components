import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import logo from './logo.svg';
import './App.css';
import ImageCaption from './ImageCaption.js';
import Layout from './Layout.js';
import GuessTheNumber from './GuessTheNumber.js';
import YouClicked from './YouClicked.js';
import CharacterCounter from './CharacterCounter.js';
import CharacterLimit from './CharacterLimit.js';
import GuessingGame from './GuessingGame.js';
import GithubProfile from './GithubProfile.js';
import SearchForm from './GithubSearchForm.js';
import GithubSearch from './GithubSearch.js';

var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

class App extends Component {
  render() {
    return (
      
      <div className="App">
          
          <GithubSearch />
          
          <GithubProfile username="rockwell421" />
          
          <GuessingGame numberToGuess={Math.floor(Math.random() *100)} />
          
          <YouClicked timesClicked={0} timesReset={0}/>
          
          <CharacterCounter />
          
          <CharacterLimit limit={50} />
          
           <GuessTheNumber numberToGuess={50}/>
          
        <div>
          <h2>testing ImageCaption</h2>
          <ImageCaption source="http://i.imgur.com/D8JWn.jpg" text="this is kittenz" />
        </div> 
        
        <div>{
          imageList.map(item =>
            <ImageCaption source={item.source} text={item.text} key={item.id} />
          )}
          </div>
          
          <Layout>
            <h2>Testing Layout</h2>
            <main>
            <h2>About Us</h2>
            <p>We are <a href="http://www.facebook.github.io/react/">React</a> developers </p>
            </main>
          </Layout>
          
      </div>
    
    );
  }
}

export default App;
