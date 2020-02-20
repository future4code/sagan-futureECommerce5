import React from 'react'
import BotaoCard from './BotaoCard'
import styled from 'styled-components'
import Home from './Home'

const Card = styled.div`
width: 20vw;
height: 30vh;
border: 1px solid black;
display: flex;
flex-direction:column;
`

const ImagemCard = styled.img`
width:50%;
`


function Cards(props){

return (
    <Card>
        <ImagemCard src={props.imagem} alt =" Imagem do card" />
        <span>{props.titulo}</span>
        <BotaoCard/>
        </Card>
)
}

export default Cards