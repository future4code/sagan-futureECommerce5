import React from 'react'
import BotaoCard from './BotaoCard'
import styled from 'styled-components'
import Home from './Home'

const Card = styled.div`
width: 17vw;
height: 56vh;
border: 1px dashed orange;
display: grid;
grid-template-rows:4fr 1fr 1fr 1fr;
`

const StyledSpan = styled.span`
margin: 2.5%;
`

const ImagemCard = styled.img`
width:95%;
height: 34vh;
margin: 2.5%;
`


function Cards(props){

return (
    <Card>
        <ImagemCard src={props.imagem} alt =" Imagem do card" />
        <StyledSpan>{props.titulo}</StyledSpan>
        <StyledSpan>R${props.value}</StyledSpan>
        <BotaoCard/>
    </Card>
)
}

export default Cards