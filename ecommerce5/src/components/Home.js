import React from 'react'
import Cards from './Cards'

function Home(props){
    return (
        <div>
        <Cards imagem={require('../img/nasa1.jpg')} titulo="teste"/>
        <Cards imagem={require('../img/nasa2.jpg')} titulo="teste"/>
        <Cards imagem={require('../img/nasa3.jpg')} titulo="teste"/>
        <Cards imagem={require('../img/nasa4.jpg')} titulo="teste"/>
        <Cards imagem={require('../img/nasa5.jpg')} titulo="teste"/>
        <Cards imagem={require('../img/nasa6.jpg')} titulo="teste"/>
        <Cards imagem={require('../img/nasa7.jpg')} titulo="teste"/>
        <Cards imagem={require('../img/nasa8.jpg')} titulo="teste"/>
        <Cards imagem={require('../img/nasa9.jpg')} titulo="teste"/>
        <Cards imagem={require('../img/nasa11.jpg')} titulo="teste"/>
        </div>
)
    
}

export default Home