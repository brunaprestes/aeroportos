import React, { Component } from 'react';
import './voo.scss';
import Voos from './teste';
export default class Voo extends Component {

  componentDidMount() {
    this.getVoos();
  }

  getVoos() {
    console.log(Voos);
    return Voos;
  }

  render() {
    return (
      <div className="voo-component">
        <h1>Voôs disponíveis</h1>
        <div className="filters">
          <form>
            <label>
              Partida:
              <div className="input-group" >
                <select className="form-control" >
                  <option value="grapefruit">Aeroporto Internacional Juscelino Kubitschek</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
                <div class="input-group-append">
                  <span className="input-group-text -blue"><i className="icon icon-land"></i></span>
                </div>
              </div>
            </label>
            <label>
              Destino:
              <div className="input-group" >
                <select className="form-control" >
                  <option value="grapefruit">Aeroporto Internacional Juscelino Kubitschek</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
                <div class="input-group-append">
                  <span className="input-group-text -pink"><i className="icon icon-land"></i></span>
                </div>
              </div>
            </label>
            <label>
              Data de embarque:
              <div className="input-group" >
                <input className="form-control" type="date" readonly />
                <div class="input-group-append">
                  <span className="input-group-text -pink"><i className="icon icon-date"></i></span>
                </div>
              </div>
            </label>
            <input type="submit" value="Submit" className="btn btn-submit"/>
          </form>
        </div>
        <div className="grid-voos">
          <div className="row">
            <div className="cell">
              <span className = "icon icon-land -blue" > </span>
              <span className="arport">Viracopos</span>
            </div>
            <div className="cell">
              <span className = "icon icon-arrived -pink" > </span>
              <span className="arport">Miami</span>
            </div>
            <div className="cell">
              <span className="icon icon-date -purple"></span>
              <span className="arport">99/99/99</span>
            </div>
            <div className="cell">
              <span className = "icon icon-money -green" > </span>
              <span className="arport">R$400,00</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
