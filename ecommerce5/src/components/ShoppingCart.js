import React from 'react'
import Cards from './Cards'
import styled from 'styled-components'

const CartBox = styled.div`
    border: 1px solid black;
`

function ShoppingCart(props) {
    return (
        <CartBox>
            {props.cartopen ? <h3>Carrinho:</h3> : ''}
            {props.cartopen ? props.carrinho.map((produto) => {
                return (<div>
                    <p>1x: { produto.name }</p>
                </div>)
            })
            : ""
            }
            {props.cartopen ? <h3>Valor Total: { props.valorTotal }</h3> : ''}
        </CartBox>
)
    
}



export default ShoppingCart