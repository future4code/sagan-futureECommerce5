import React from 'react';
import './App.css';
import Home from './components/Home';
import Filtro from './components/Filtros';
import styled from 'styled-components'
import ShoppingCart from './components/ShoppingCart';

const MainDiv = styled.div`
display: grid;
grid-template-columns: ${props => props.cartopen ? "1fr 2fr 1fr" : "1fr 3fr"};
padding: 10px;
gap: 20px;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [{
        id: 1,
        name: "O grande Tuor Pelos planetas",
        value: 3599.00,
        imageUrl: "https://img.vixdata.io/pd/webp-large/pt/sites/default/files/bbr/nasa1.jpg"
      },
      {
        id: 2,
        name: "Viagem a marte",
        value: 2349.00,
        imageUrl: "https://img.vixdata.io/pd/webp-large/pt/sites/default/files/bbr/nasa5.jpg"
      },
      {
        id: 3,
        name: "Produto 123",
        value: 2149.00,
        imageUrl: "https://img.vixdata.io/pd/webp-large/pt/sites/default/files/bbr/nasa2.jpg"
      },
      {
        id: 4,
        name: "Produto 13",
        value: 1849.00,
        imageUrl: "https://img.vixdata.io/pd/webp-large/pt/sites/default/files/bbr/nasa3.jpg"
      },
      {
        id: 5,
        name: "O grande Jupter",
        value: 1499.00,
        imageUrl: "https://img.vixdata.io/pd/webp-large/pt/sites/default/files/bbr/nasa4.jpg"
      },
      {
        id: 6,
        name: "Produto 18",
        value: 1199.00,
        imageUrl: "https://img.vixdata.io/pd/webp-large/pt/sites/default/files/bbr/nasa6.jpg"
      }, {
        id: 7,
        name: "Produto 199",
        value: 999.00,
        imageUrl: "https://img.vixdata.io/pd/webp-large/pt/sites/default/files/bbr/nasa7.jpg"
      },
      {
        id: 8,
        name: "Produto 1222",
        value: 979.00,
        imageUrl: "https://img.vixdata.io/pd/webp-large/pt/sites/default/files/bbr/nasa7.jpg"
      },
      {
        id: 9,
        name: "Produto 134",
        value: 849.00,
        imageUrl: "https://img.vixdata.io/pd/webp-large/pt/sites/default/files/bbr/nasa9.jpg"
      }],
      cardsFiltrados: [],
      comiAmendoim: false
    }
   
  }

  modificarDadosFiltrados = (novosDadosFiltrados) => {
    this.setState({
      cardsFiltrados: novosDadosFiltrados
    })
  }

  componentDidMount() {
    this.modificarDadosFiltrados(this.state.cards)
  }

  ordenarCards = (valorFiltrar) =>{
    const novoValorFiltrar = valorFiltrar
    this.setState({
      ordemPreco:  novoValorFiltrar
    })
    console.log(this.state.ordemPreco)
  }

  setarNovoCartOpen = (novoCartOpen) => {
    this.setState({
      comiAmendoim: novoCartOpen
    })
  }

  addProduto = (Pepperoni) => {
    console.log(Pepperoni)
  }
  
  render() {
    return (
      <MainDiv cartopen = {this.state.comiAmendoim}>
        <Filtro dados = { this.state.cards } modificarDadosFiltrados = {this.modificarDadosFiltrados} ordenarCards = {this.ordenarCards} setarNovoCartOpen={this.setarNovoCartOpen} />
        <Home dados={ this.state.cardsFiltrados } ordemPreco ={this.state.ordemPreco} addProduto={this.addProduto}/>
        <ShoppingCart cartopen = {this.state.comiAmendoim}/>
      </MainDiv>
    )
  }
}
export default App;
