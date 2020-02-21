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

    adicionarNoCarrinho = (idProduto) => {
        this.props.addProduto(idProduto)
    }

    render(props) {
        return(
            <div>
             <StyledButton onClick={() => this.adicionarNoCarrinho(this.props.id)}>Adicionar ao carrinho</StyledButton>
            </div>
        )
    }
}

export default BotaoCard