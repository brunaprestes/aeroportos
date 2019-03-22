/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './voo.scss';

const Voo = (props) => {
  console.log(props);
  debugger;
  return(<div className="voo-component">
    <h1>Voôs disponíveis</h1>
    <div className="filters">
      <form>
        <label>
          Partida:
          <div className="input-group" >
            <select className="form-control" >
              <option value="">Selecione um aeroporto</option>
             {
               props.aeroportos.map((aeroporto) => <option value={aeroporto.aeroporto}>{aeroporto.nome}</option>)
             }
            </select>
            <div className="input-group-append">
              <span className="input-group-text -blue"><i className="icon icon-land"></i></span>
            </div>
          </div>
        </label>
        <label>
          Destino:
          <div className="input-group" >
            <select className="form-control" >
              <option value="">Selecione um aeroporto</option>
             {
               props.aeroportos.map((aeroporto) => <option value={aeroporto.aeroporto}>{aeroporto.nome}</option>)
             }
            </select>
            <div className="input-group-append">
              <span className="input-group-text -pink"><i className="icon icon-land"></i></span>
            </div>
          </div>
        </label>
        <label>
          Data de embarque:
          <div className="input-group" >
            <input className="form-control" type="date" readonly />
            <div className="input-group-append">
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
  );
}

Voo.defaultProps = {
  aeroportos: null,
};

Voo.propTypes = {
  aeroportos: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Voo;
