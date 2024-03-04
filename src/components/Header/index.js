import React from 'react'

import Cart from '../../assets/card.svg'
import Person from '../../assets/person.svg'
import {
  Container,
  ContainerRight,
  ContainerLeft,
  PageLink,
  ContainerText,
  Line,
  PageLinkExit
} from './style'

export function Header () {
  return (
    <Container>
      <ContainerLeft>
        <PageLink>
          Home
        </PageLink>
        <PageLink>
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          <img src={Cart} alt='carrinho' />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt='logo-pessoa' />
        </PageLink>

        <ContainerText>
          <p>Olá, Danilo</p>
          <PageLinkExit>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
