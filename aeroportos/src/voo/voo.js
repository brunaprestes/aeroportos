import React, { Component } from 'react';
import './voo.scss';
export default class voo extends Component {
  render() {
    return (
      <div class="voo-component">
        <h1>Voôs disponíveis</h1>
        <div class="filters">
          <form>
            <label>
              Partida:
              <div class="input-group" >
                <select class="form-control" >
                  <option value="grapefruit">Aeroporto Internacional Juscelino Kubitschek</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
                <span class="input-group-addon -blue"><i class="icon icon-land"></i></span>
              </div>
            </label>
            <label>
              Destino:
              <div class="input-group" >
                <select class="form-control" >
                  <option value="grapefruit">Aeroporto Internacional Juscelino Kubitschek</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
                <span class="input-group-addon -purple"><i class="icon icon-land"></i></span>
              </div>
            </label>
            <label>
              Data de saída:
              <div class="input-group date datepicker" data-date-format="mm-dd-yyyy">
                <input class="form-control" type="date" readonly />
                <span class="input-group-addon -purple"><i class="icon icon-date"></i></span>
              </div>
            </label>
            <input type="submit" value="Submit" class="btn btn-submit"/>
          </form>
        </div>
        <div class="grid-voos">
          <div class="row">
            <div class="cell">
              <span className = "icon icon-land -blue" > </span>
              <span className="arport">Viracopos</span>
            </div>
            <div class="cell">
              <span className = "icon icon-arrived -pink" > </span>
              <span className="arport">Miami</span>
            </div>
            <div class="cell">
              <span className="icon icon-date -purple"></span>
              <span className="arport">99/99/99</span>
            </div>
            <div class="cell">
              <span className = "icon icon-money -green" > </span>
              <span className="arport">R$400,00</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
