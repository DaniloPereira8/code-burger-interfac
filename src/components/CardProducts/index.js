import React from 'react'

import PropTypes from 'prop-types'

import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'
import { Container, Image, ProductName, ProductPrice } from './style'

export function CardProducts ({ product }) {
  const { putProductInCart } = useCart()
  return (
    <Container>
      <Image src={product.url} />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button onClick={ () => putProductInCart(product)}>Adicionar</Button>
      </div>

    </Container>
  )
}

CardProducts.propTypes = {
  product: PropTypes.object
}
