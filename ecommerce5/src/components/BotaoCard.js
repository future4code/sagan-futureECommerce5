import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
background-color: black;
color: white;
border: solid black 1px;
height: 5vh;
width: 95%;
margin: 2.5%;
`

class BotaoCard extends React.Component {
    constructor(props){
        super(props)
    }

    pizzaSalgada = (props) =>{
        const Pepperoni = this.props.id
        this.props.addProduto(Pepperoni)
    }

    render(props){
        return(
            <div>
             <StyledButton onClick={this.pizzaSalgada}>Adicionar ao carrinho</StyledButton>
            </div>
        )
    }
}

export default BotaoCard