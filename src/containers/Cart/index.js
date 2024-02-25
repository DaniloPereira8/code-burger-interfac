import React from 'react'

import CartLogo from '../../assets/logocard.svg'
import { CartItems } from '../../components'
import { Container, CartImg } from './style'

export function Cart () {
  return (
  <Container>
<CartImg src={CartLogo} alt='Logo do carrinho'/>
<CartItems/>
  </Container>
  )
}
