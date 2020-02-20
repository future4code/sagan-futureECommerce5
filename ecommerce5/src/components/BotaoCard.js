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


function BotaoCard(props) {

    return (
        <div>
            <StyledButton onClick={"Adicionar ao carrinho"} >Adicionar ao carrinho</StyledButton>

        </div>
    )
}

export default BotaoCard