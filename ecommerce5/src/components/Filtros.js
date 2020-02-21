import React from 'react';
import styled from 'styled-components'

const FiltrosPlaceholder = styled.div`
    border: solid 1px black;
    height: 125vh;
`

class Filtro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valorMinimo: '',
            valorMaximo: '',
            nomeProduto: '',
            dadosFiltrados: []
        }
    }

    handleOnChangeFiltroValorMinimo = (event) => {
        const dados = (this.state.valorMaximo !== '' || this.state.valorMinimo !== '' || this.state.nomeProduto !== '') ? this.props.dados  : this.state.dadosFiltrados
        const dadosFiltrados = dados.filter((dado) => {
            return dado.value >= event.target.value
        })

        this.props.modificarDadosFiltrados(dadosFiltrados)

        this.setState({
            valorMinimo: event.target.value,
            dadosFiltrados
        })
    }

    handleOnChangeFiltroValorMaximo = (event) => {
        const dados = (this.state.valorMaximo !== '' || this.state.valorMinimo !== '' || this.state.nomeProduto !== '') ? this.state.dadosFiltrados : this.props.dados
        const dadosFiltrados = dados.filter((dado) => {
            return dado.value <= event.target.value
        })

        this.props.modificarDadosFiltrados(dadosFiltrados)

        this.setState({
            valorMaximo: event.target.value,
            dadosFiltrados
        })
    }


    handleOnChangeFiltroNomeProduto = (event) => {
        const dados = (this.state.valorMaximo !== '' || this.state.valorMinimo !== '' || this.state.nomeProduto !== '') ? this.state.dadosFiltrados : this.props.dados
        const dadosFiltrados = dados.filter((dado) => {
            return dado.name.toLowerCase().includes(event.target.value.toLowerCase())
        })

        this.props.modificarDadosFiltrados(dadosFiltrados)

        this.setState({
            nomeProduto: event.target.value,
            dadosFiltrados
        })
    }

    render() {
        return (
            <FiltrosPlaceholder>
                <h3>Filtros</h3>
                <span>Valor Minimo:</span>
                <input onChange={this.handleOnChangeFiltroValorMinimo} value={this.state.valorMinimo} type="number"/> <br/>
                <span>Valor Maximo:</span>
                <input onChange={this.handleOnChangeFiltroValorMaximo} value={this.state.valorMaximo} type="number"/> <br/>
                <span>Buscar Produto:</span>
                <input  onChange={this.handleOnChangeFiltroNomeProduto} value={this.state.nomeProduto} type="text"/> <br/>
            </FiltrosPlaceholder>
        )
    }
}

export default Filtro;