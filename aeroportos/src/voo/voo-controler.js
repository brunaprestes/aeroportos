import React, { Component } from 'react';
import axios from 'axios';
import Voo from './voo';

class VooControler extends Component {
  partida = '';
  destino = '';
  data = '';
  sortPreco = false;
  sortTempo = false;

  constructor(props) {
    super(props);
    this.state = {
      aeroportos: [],
      voos: [],
      partida: '',
      destino: '',
      data: '',
      sortPreco: false,
      sortTempo: false,
    };
    this.handleChangeGo = this.handleChangeGo.bind(this);
    this.handleChangeArrived = this.handleChangeArrived.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.onClick = this.onClick.bind(this);
    this.getFiltredList = this.getFiltredList.bind(this);
    this.formatObjectFligth  = this.formatObjectFligth.bind(this);
    this.noDataFunction = this.noDataFunction.bind(this);
    this.handleSortPreco = this.handleSortPreco.bind(this);
    this.handleSortTempo = this.handleSortTempo.bind(this);
    this.getVoos = this.getVoos.bind(this);
  }


  componentDidMount() {
    axios.get('https://api-voadora.dev.tegra.com.br/flight/companies')
      .then((response) => {
        
        this.setState({
          aeroportos: response.data,
        });
      });
    }


  formatObjectFligth (flights) {
    let aeroportosList = this.state.aeroportos;
    let voo = {
      partida: '',
      destino: '',
      dataSaida: '',
      preco: 0,
      cidadesEscalas: [],
      tempoTotal: 0,
    }
    let list = [];
    flights.forEach(flight => {

      voo.dataSaida = flight.date;
      voo.partida = (aeroportosList.filter((aeroporto) => aeroporto.aeroporto === flight.origem))[0].nome;
      voo.destino = (aeroportosList.filter((aeroporto) => aeroporto.aeroporto === flight.destino))[0].nome;

      flight.voos.forEach(vooItem => {
        voo.cidadesEscalas.push((aeroportosList.filter((aeroporto) => aeroporto.aeroporto === vooItem.origem))[0].cidade);
        voo.tempoTotal += this.getDiffHour(vooItem);
        voo.cidadesEscalas.push((aeroportosList.filter((aeroporto) => aeroporto.aeroporto === vooItem.destino))[0].cidade);
        voo.preco = voo.preco + vooItem.valor;
      } );

      list.push(voo);
      voo = {
        partida: '',
        destino: '',
        dataSaida: '',
        preco: 0,
        cidadesEscalas: [],
        tempoTotal: 0,
      }
    });


    this.setState({
      voos: list,
    });
    
    list = [];  
  }

  getDiffHour(vooItem) {
    const saida = vooItem.saida.split(':');
    const chegada = vooItem.chegada.split(':');
    const saidaMin = (parseInt(saida[0])*60) + parseInt(saida[1]);
    const chegadaMin = (parseInt(chegada[0]) * 60) + parseInt(chegada[1]);
    return (chegadaMin - saidaMin) / 60;
  }

  getFiltredList(param) {
    axios.post('https://api-voadora.dev.tegra.com.br/flight', param)
    .then((response) => {

      this.formatObjectFligth(response.data);
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
    this.setState({destino: this.destino});
  }

  handleChangeDate(event) {
    this.data = event.target.value;
    this.setState({
      data: this.data,
    });
  }

  handleSortPreco = (event) => {
    this.setState({
      sortPreco: event.target.checked,
    });
  }

  handleSortTempo = (event) => {
    debugger;
    this.setState({
      sortTempo: event.target.checked,
    });
  }

  noDataFunction(){
    if(this.state.voos.length < 1) {
      return <h1>Não encontramos itens, por gentileza faça uma nova busca</h1>
    }
    return;
  }

  onClick (event) {
    event.preventDefault();
    let param = {
      "from": this.state.partida,
      "to": this.state.destino,
      "date": this.state.data,
    }

    this.setState({
      voos: [],
    });

    this.getFiltredList(param);
  }

  render() {
    return ( 
      <Voo
        aeroportos={this.state.aeroportos}
        handleChangeGo={this.handleChangeGo}
        handleChangeArrived={this.handleChangeArrived}
        partida={this.partida} destino={this.destino}
        data={this.data}
        handleChangeDate={this.handleChangeDate}
        onClick={this.onClick}
        voos={this.getVoos()}
        noDataFunction={this.noDataFunction}
        handleSortPreco={this.handleSortPreco}
        handleSortTempo={this.handleSortTempo}
      > </Voo>
    );
  }

  getVoos() {

    if (this.state.sortPreco && this.state.sortTempo) {
      debugger;
      return this.state.voos.sort((a, b) => a.preco - b.preco).sort((a, b) => a.tempoTotal - b.tempoTotal);
    }

    if (this.state.sortTempo) {
      debugger;
      return this.state.voos.sort((a, b) => a.tempoTotal - b.tempoTotal);
    }
    debugger;
    return this.state.sortPreco ? this.state.voos.sort((a, b) => a.preco - b.preco) : this.state.voos;
  }
}

export default (VooControler);
