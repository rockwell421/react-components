import React from 'react';
import fetch from 'isomorphic-fetch';

class GithubProfile extends React.Component {
    
    constructor() {
        super()
        this.state = {};
    }
    
    componentDidMount(){
        this.fetchData();
    }
    
    componentDidUpdate(){
        
        this.username ? null : this.fetchData();
    }
    
    fetchData(){
       var username = this.props.username;
        
        var url = `https://api.github.com/users/${this.props.username}`;
        
            fetch(url)
            .then(response => response.json())
            .then( jsonData => { 
                this.setState({
                    user: jsonData
                }); 
            });
           
    }

    _userRender = () => {
       
        return(
            <div>
            <hr />
                <img className="img" src={this.state.user.avatar_url} alt={this.state.user.name} />
                <h1>{this.state.user.login}</h1>
                <p>{this.state.user.bio}</p>

            </div>
        )
    }
    
    render() {
        return (
            <div className="github-user">
                {this.state.user ? this._userRender() : "LOADING"} 
            </div>
            );
        }
    }

export default GithubProfile;

