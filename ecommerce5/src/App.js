import React from 'react';
import './App.css';
import Home from './components/Home';
import Filtro from './components/Filtros';
import styled from 'styled-components'

const MainDiv = styled.div`
display: grid;
grid-template-columns: 1fr 3fr;
padding: 10px;
gap: 20px;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [{
        id: 1,
        name: "Produto 1",
        value: 10.00,
        imageUrl: "https://img.vixdata.io/pd/webp-large/pt/sites/default/files/bbr/nasa1.jpg"
      },
      {
        id: 2,
        name: "Produto 12",
        value: 5.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 3,
        name: "Produto 123",
        value: 6.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 4,
        name: "Produto 13",
        value: 8.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 5,
        name: "Produto 16",
        value: 7.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 6,
        name: "Produto 18",
        value: 2.0,
        imageUrl: "https://picsum.photos/200/200"
      }, {
        id: 7,
        name: "Produto 199",
        value: 1.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 8,
        name: "Produto 1222",
        value: 3.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 9,
        name: "Produto 134",
        value: 4.0,
        imageUrl: "https://picsum.photos/200/200"
      }],
      cardsFiltrados: []
    }
   
  }

  modificarDadosFiltrados = (novosDadosFiltrados) => {
    this.setState({
      cardsFiltrados: novosDadosFiltrados
    })
  }
  
  render() {
    return (
      <MainDiv>
        <Filtro dados = { this.state.cards } modificarDadosFiltrados = {this.modificarDadosFiltrados}  />
        <Home dados={ this.state.cardsFiltrados.length > 0 ? this.state.cardsFiltrados : this.state.cards} />
      </MainDiv>
    )
  }
}
export default App;
