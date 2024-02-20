import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/CATEGORIAS.png'
import api from '../../services/api'
import { Container, CategoryImg } from './style'

function CategoryCarousel () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')

      setCategories(data)
    }
    loadCategories()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
  <Container>
<CategoryImg src={Category} alt='Logo da categoria'/>

<Carousel itemsToShow={5} style={{ width: '90%' }} breakPoints={breakPoints}>
  {
   categories && categories.map(category => (
    <div key={category.id}>
      <img src={category.url} alt='foto da categoria'/>
      <button>{category.name}</button>
    </div>
   ))}
</Carousel>
  </Container>
  )
}

export default CategoryCarousel
