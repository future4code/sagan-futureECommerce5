import React from 'react';
import './App.css';
import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [{
        id: 1,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200"
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
      <div>
        <Home imagem = {this.state.cards.map(el =>{
          return el.imageUrl
        })} />
        
          
        })} 
      </div>
    )
  }
}
export default App;
