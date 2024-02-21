import React from 'react'

import HomeLogo from '../../assets/Home-logo (2).svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'
import { Container, HomeImg } from './style'

function Home () {
  return (
  <Container>
<HomeImg src={HomeLogo} alt='Logo da home'/>
<CategoryCarousel/>
<OffersCarousel/>
  </Container>
  )
}

export default Home
