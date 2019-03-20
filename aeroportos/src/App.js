import React, { Component } from 'react';
import logo from './cumprido2.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      < div className = "full-screen dont-scroll" >
        <header>
          <img src={logo} class="logo"/>
        </header>
        <div className="content">
          <main>
            conteudo
          </main>
          <nav className="menu">
            <ul>
              <li>
                <span className="icon icon-land">
                
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
