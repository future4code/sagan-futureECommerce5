import React from 'react'
import Cards from './Cards'

function Home(props){
    return (
        <div>
            { props.dados.map((dado) => {
                return <Cards imagem={dado.imageUrl} titulo={dado.name}/>
            }) }
        </div>
)
    
}

export default Home