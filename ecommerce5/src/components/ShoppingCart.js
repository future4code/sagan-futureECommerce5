import React from 'react'
import Cards from './Cards'
import styled from 'styled-components'

const CartBox = styled.div`
border: 1px solid black;
`

function ShoppingCart(props) {
    return (
        <CartBox>
            {props.cartopen ? 
            <div>
                <h3>Carrinho:</h3>
                <p>Valor Total:</p>
            </div>
            : ""
            }
        </CartBox>
)
    
}



export default ShoppingCart