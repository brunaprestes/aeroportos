/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './voo.scss';

const Voo = (props) => {

  debugger;
  console.log(props.voos);

  return (
    <div className="voo-component">
      <h1>Voôs disponíveis</h1>
      <div className="filters">
        <form>
          <label>
            Partida:
            <div className="input-group">
              <select
                value={props.partida}
                onChange={props.handleChangeGo}
                className="form-control"
              >
                <option value="">Selecione um aeroporto</option>
                {props.aeroportos.map(aeroporto => (
                  <option
                    value={aeroporto.aeroporto}
                    key={`${aeroporto.aeroporto}Partida`}
                  >
                    {aeroporto.nome}
                  </option>
                ))}
              </select>
              <div className="input-group-append">
                <span className="input-group-text -blue">
                  <i className="icon icon-land" />
                </span>
              </div>
            </div>
          </label>
          <label>
            Destino:
            <div className="input-group">
              <select
                value={props.destino}
                onChange={props.handleChangeArrived}
                className="form-control"
              >
                <option value="">Selecione um aeroporto</option>
                {props.aeroportos.map(aeroporto => (
                  <option
                    value={aeroporto.aeroporto}
                    key={`${aeroporto.aeroporto}Destino`}
                  >
                    {aeroporto.nome}
                  </option>
                ))}
              </select>
              <div className="input-group-append">
                <span className="input-group-text -pink">
                  <i className="icon icon-land" />
                </span>
              </div>
            </div>
          </label>
          <label>
            Data de embarque:
            <div className="input-group">
              <input
                value={props.data}
                onChange={props.handleChangeDate}
                className="form-control"
                type="date"
              />
              <div className="input-group-append">
                <span className="input-group-text -pink">
                  <i className="icon icon-date" />
                </span>
              </div>
            </div>
          </label>
          <button onClick={props.onClick} className="btn btn-submit">
            Enviar
          </button>
        </form>
      </div>
      <div className="order">
        <h1>Ordenar por:</h1>
        <label>
          <span>Menor tempo:</span>{" "}
          <input
            type="checkbox"
            className="form-control"
            onChange={props.sortTempo}
            isTempoSortable={this.state.sortTempo}
          />
        </label>
        <label>
          <span>Menor valor:</span>{" "}
          <input
            type="checkbox"
            className="form-control"
            onChange={props.sortValue}
            value={this.props.isValueSortable}
          />
        </label>
      </div>
      <div className="grid-voos">
        {props.voos.map(voo => (
          <div className="row">
            <div className="cell">
              <span className="icon icon-land -blue"> </span>
              <span className="arport">{voo.partida}</span>
            </div>
            <div className="cell">
              <span className="icon icon-arrived -pink"> </span>
              <span className="arport">{voo.destino}</span>
            </div>
            <div className="cell">
              <span className="icon icon-date -purple" />
              <span className="arport">{voo.dataSaida}</span>
            </div>
            <div className="cell">
              <span className="icon icon-money -green"> </span>
              <span className="arport">
                {voo.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })}
              </span>
            </div>
            <div className="cell">
              <span className="escalas"> Escalas em: </span>
              <span className="arport">
                {voo.cidadesEscalas.toString().replace(/,/g, ", ")}
              </span>
            </div>
            <div className="cell">
              <span className="escalas"> Tempo total:</span>
              <span className="arport">8h00</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Voo.defaultProps = {
  aeroportos: [],
};

Voo.propTypes = {
  aeroportos: PropTypes.array,
  filter: PropTypes.func,
};

export default Voo;
