import React from 'react';
import styled from 'styled-components'

const FiltrosPlaceholder = styled.div`
    border: solid 1px black;
    height: 125vh;
`

const CartButton = styled.button`
border-radius: 50%;
border: none;
background-color: red;
position: fixed;
bottom: 7vh;
left: 7vh;
width: 5vw;
height: 10vh;
`

class Filtro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valorMinimo: '',
            valorMaximo: '',
            nomeProduto: '',
            dadosFiltrados: [],
            cartopen: false
        }
    }

    handleOnChangeFiltroValorMinimo = (event) => {
        this.setState({
            valorMinimo: event.target.value
        })

        if (event.target.value !== '') {
            const dados = (this.state.valorMaximo !== '' || this.state.nomeProduto !== '') ? this.state.dadosFiltrados : this.props.dados

            const dadosFiltrados = this.aplicarFiltroPorValorMinimo(dados, event.target.value)

            console.log(dados, event.target.value)

            this.props.modificarDadosFiltrados(dadosFiltrados)

            this.setState({
                dadosFiltrados: dadosFiltrados.length > 0 ? dadosFiltrados : dados
            })
        } else {
            let dados = this.props.dados

            if (this.state.valorMaximo !== '') {
                dados = this.aplicarFiltroPorValorMaximo(dados)
            }

            if (this.state.nomeProduto !== '') {
                dados = this.aplicarFiltroPorNome(dados)
            }

            this.props.modificarDadosFiltrados(dados)

            this.setState({
                dadosFiltrados: dados
            })
        }
    }

    handleOnChangeFiltroValorMaximo = (event) => {
        this.setState({
            valorMaximo: event.target.value
        })

        if (event.target.value !== '') {
            const dados = (this.state.valorMinimo !== '' || this.state.nomeProduto !== '') ? this.state.dadosFiltrados : this.props.dados

            const dadosFiltrados = this.aplicarFiltroPorValorMaximo(dados, event.target.value)

            this.props.modificarDadosFiltrados(dadosFiltrados)

            this.setState({
                dadosFiltrados: dadosFiltrados.length > 0 ? dadosFiltrados : dados
            })
        } else {
            let dados = this.props.dados

            if (this.state.valorMinimo !== '') {
                dados = this.aplicarFiltroPorValorMinimo(dados)
            }

            if (this.state.nomeProduto !== '') {
                dados = this.aplicarFiltroPorNome(dados)
            }

            this.props.modificarDadosFiltrados(dados)

            this.setState({
                dadosFiltrados: dados
            })
        }
    }

    handleOnChangeFiltroNomeProduto = (event) => {
        this.setState({
            nomeProduto: event.target.value
        })

        if (event.target.value !== '') {
            const dados = (this.state.valorMaximo !== '' || this.state.valorMinimo !== '') ? this.state.dadosFiltrados : this.props.dados

            const dadosFiltrados = this.aplicarFiltroPorNome(dados, event.target.value)

            this.props.modificarDadosFiltrados(dadosFiltrados)

            this.setState({
                dadosFiltrados: dadosFiltrados.length > 0 ? dadosFiltrados : dados
            })
        } else {
            let dados = this.props.dados

            if (this.state.valorMinimo !== '') {
                dados = this.aplicarFiltroPorValorMinimo(dados)
            }

            if (this.state.valorMaximo !== '') {
                dados = this.aplicarFiltroPorValorMaximo(dados)
            }

            this.props.modificarDadosFiltrados(dados)

            this.setState({
                dadosFiltrados: dados
            })
        }
    }

    aplicarFiltroPorValorMinimo = (dados, filtro = this.state.valorMinimo) => {
        return dados.filter((dado) => {
            return dado.value >= filtro
        })
    }

    aplicarFiltroPorValorMaximo = (dados, filtro = this.state.valorMaximo) => {
        return dados.filter((dado) => {
            return dado.value <= filtro
        })
    }

    aplicarFiltroPorNome = (dados, filtro = this.state.nomeProduto) => {
        return dados.filter((dado) => {
            return dado.name.toLowerCase().includes(filtro.toLowerCase())
        })
    }
    salvarFiltroPreco = (event) =>{
        const valorFiltrar = event.target.value
        this.props.ordenarCards(valorFiltrar)
    }

    openCart = () => {
        const novoCartOpen = !this.state.cartopen;

        this.setState({
            cartopen: novoCartOpen
        })
        this.props.setarNovoCartOpen(novoCartOpen)
    }


    render() {
        return (
            <FiltrosPlaceholder>
                <h3>Filtros</h3>
                <span>Valor Minimo:</span>
                <input onChange={this.handleOnChangeFiltroValorMinimo} value={this.state.valorMinimo} type="number" /> <br />
                <span>Valor Maximo:</span>
                <input onChange={this.handleOnChangeFiltroValorMaximo} value={this.state.valorMaximo} type="number" /> <br />
                <span>Buscar Produto:</span>
                <input onChange={this.handleOnChangeFiltroNomeProduto} value={this.state.nomeProduto} type="text" /> <br />
                <span>Preço</span>
                <select onChange={this.salvarFiltroPreco}>
                    <option value="0">Crescente</option>
                    <option value="1">Decrescente</option>
                </select>
                <CartButton onClick={this.openCart}>a</CartButton>
            </FiltrosPlaceholder>
        )
    }
}

export default Filtro;