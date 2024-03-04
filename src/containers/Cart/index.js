import React from 'react'

import CartLogo from '../../assets/logocard.svg'
import { CartItems, CartResume } from '../../components'
import { Container, CartImg, Wrapper } from './style'

export function Cart () {
  return (
  <Container>
<CartImg src={CartLogo} alt='Logo do carrinho'/>
<Wrapper>
<CartItems/>
<CartResume/>
</Wrapper>
  </Container>
  )
}
