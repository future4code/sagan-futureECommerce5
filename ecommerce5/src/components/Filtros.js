import React from 'react';

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
        const dados = (this.state.valorMaximo !== '' || this.state.valorMinimo !== '' || this.state.nomeProduto !== '') ? this.state.dadosFiltrados : this.props.dados  
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
            <div id="filtro">
                <label for="valorMinimo"> Valor Mínimo:</label>
                <input id="valorMinimo" onChange={this.handleOnChangeFiltroValorMinimo} value={this.state.valorMinimo} type="number"/>
                <label for="valorMaximo"> Valor Máximo</label>
                <input id="valorMaximo" onChange={this.handleOnChangeFiltroValorMaximo} value={this.state.valorMaximo} id="valorMaximo" type="number"/>
                <label for="nomeProduto"> Buscar Produto </label>
                <input id="nomeProduto" onChange={this.handleOnChangeFiltroNomeProduto} value={this.state.nomeProduto} id="buscarProduto" type="text"/>
            </div>
        )
    }
}

export default Filtro;