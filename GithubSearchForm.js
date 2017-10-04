import React from 'react';
    

class GithubSearchForm extends React.Component {
    
    _handleSubmit(event) {
        event.preventDefault();
        this.props.onSearch(this.refs.userInput.value);
    }
        
    
  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <h2>Enter a GitHub username:</h2>
        <input type="text" ref="userInput" />
        <button type="submit">Go!</button>
      </form>
    );
  }
};

export default GithubSearchForm;
    