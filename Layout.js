import React from 'react';

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
      
        <nav className="main-nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Who We Are</a></li>
                <li><a href="/">Why Us</a></li>
            </ul>
        </nav>
        
        <main>
            {this.props.children}
        </main>
      
        <footer>
            Copywhat 2017 Kittens
        </footer>
      </div>
    );
  }
};

export default Layout;