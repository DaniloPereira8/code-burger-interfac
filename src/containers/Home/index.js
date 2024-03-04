import React from 'react'

import HomeLogo from '../../assets/Home-logo (2).svg'
import { CategoryCarousel, OffersCarousel, Header } from '../../components'
import { Container, HomeImg } from './style'

export function Home () {
  return (
    <Container>
      <Header />
      <HomeImg src={HomeLogo} alt='Logo da home' />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
