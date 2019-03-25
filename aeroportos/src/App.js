import React, { Component } from 'react';
import logo from './logo.png';
import './App.scss';
import VooControler from './voo/voo-controler';

class App extends Component {
  render() {
    return (
      < div className="full-screen dont-scroll" >
        <header>
          <img src={logo} className="logo" alt="Logo marca da Sweet Flight"/>
        </header>
        <div className="content">
          <main>
            <VooControler></VooControler>
          </main>
          <nav className="menu">
            <ul className="list-items">
              <li className="item -purple">
                <span className="icon icon-home"></span>
                <span className="text">Home</span>
              </li>
              <li className="item -blue">
                <span className="icon icon-land"></span>
                <span className="text">Saída</span>
              </li>
              <li className="item -pink">
                <span className="icon icon-arrived"></span>
                <span className="text">Chegada</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
