import React from 'react';
import './App.css';
import Home from './components/Home';
import styled from 'styled-components'

const MainDiv = styled.div`
display: grid;
grid-template-columns: 1fr 3fr;
padding: 10px;
gap: 20px;
`

const FiltrosPlaceholder = styled.div`
border: solid 1px black;
height: 125vh;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [{
        id: 1,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 2,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 3,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 4,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 5,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 6,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200"
      }, {
        id: 7,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 8,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 9,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 10,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200"
      }],
    }
   
  }
  
  render() {
    return (
      <MainDiv>
        <FiltrosPlaceholder>
          <h3>Filtros</h3>
          <span>Valor Minimo:</span> <input type="text"></input><br/>
          <span>Valor Maximo:</span> <input type="text"></input><br/>
          <span>Buscar Produto:</span> <input type="text"></input><br/>
        </FiltrosPlaceholder>
        
        <Home/>

      </MainDiv>
    )
  }
}
export default App;
