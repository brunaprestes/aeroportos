import React, { Component } from 'react';
import axios from 'axios';
import Voo from './voo';

class VooControler extends Component {
  partida = '';
  destino = '';

  constructor(props) {
    super(props);
    this.state = {
      aeroportos: [],
      voos: [],
      partida: '',
      destino: '',
    };
    this.handleChangeGo = this.handleChangeGo.bind(this);
    this.handleChangeArrived = this.handleChangeArrived.bind(this);
  }

  componentDidMount() {
    axios.get('https://api-voadora.dev.tegra.com.br/flight/companies')
      .then((response) => {
        
        this.setState({
          aeroportos: response.data,
        });
        console.log(response.data);
      });
    }


  fligthFiltred() {
    axios.post('https://api-voadora.dev.tegra.com.br/flight')
      .then((response) => {
        this.setState({
          voos: response.data[0],
        });
        console.log(response.data);
      });
  }

  getFiltredList() {
    axios.post('https://api-voadora.dev.tegra.com.br/flight')
    .then((response) => {
      
      this.setState({
        voos: response.data,
      });
      console.log(response.data);
    });
  }

  shouldComponentUpdate() {
    return true;
  }

  handleChangeGo(event) {
    this.partida = event.target.value;
    this.setState({partida: this.partida});
  }

  handleChangeArrived(event) {
    this.destino = event.target.value;
    console.log(this.destino);
    this.setState({destino: this.destino});
  }

  render() {
    return ( <Voo aeroportos={this.state.aeroportos} handleChangeGo={this.handleChangeGo} handleChangeArrived={this.handleChangeArrived}  partida={this.partida} destino={this.destino}> </Voo>
    );
  }
}

export default (VooControler);
