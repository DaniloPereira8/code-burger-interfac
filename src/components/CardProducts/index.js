import React from 'react'

import PropTypes from 'prop-types'

import { Button } from '../Button'
import { Container, Image, ProductName, ProductPrice } from './style'

export function CardProducts ({ product }) {
  return (
    <Container>
      <Image src={product.url} />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button>Adicionar</Button>
      </div>

    </Container>
  )
}

CardProducts.propTypes = {
  product: PropTypes.object
}
