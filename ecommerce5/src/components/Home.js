import React from 'react'
import Cards from './Cards'
import styled from 'styled-components'

const ImagesGridPlaceholder = styled.div`
display: grid;
grid-template-columns:repeat(4, 1fr);
gap: 10px;
margin-top: 35px;
margin-left: 5px;
`

//remover margin top depois

function Home(props) {
    return (
        <ImagesGridPlaceholder>
            {props.ordemPreco  == '1' ? props.dados.map((dado) => {
                return <Cards imagem={dado.imageUrl} titulo={dado.name} value={dado.value}/>
            }) : props.dados.map((dado) => {
                return <Cards key={dado.id} imagem={dado.imageUrl} titulo={dado.name} value={dado.value}/>
            }).reverse()}
        </ImagesGridPlaceholder>
)
    
}

export default Home