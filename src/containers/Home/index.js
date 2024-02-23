import React from 'react'

import HomeLogo from '../../assets/Home-logo (2).svg'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Container, HomeImg } from './style'

export function Home () {
  return (
  <Container>
<HomeImg src={HomeLogo} alt='Logo da home'/>
<CategoryCarousel/>
<OffersCarousel/>
  </Container>
  )
}
