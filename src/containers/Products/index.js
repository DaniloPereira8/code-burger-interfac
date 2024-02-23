import React, { useEffect, useState } from 'react'

import ProductsLogo from '../../assets/produtosLOGO.svg'
import { CardProducts } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ProductsImg, CategoryButton,
  CategoriesMenu,
  ProductsContainer
} from './style'

export function Products () {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts () {
      const { data: allproducts } = await api.get('products')

      const newProducts = allproducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  return (
  <Container>
<ProductsImg src={ProductsLogo} alt='Logo do produto'/>

<CategoriesMenu>
{ categories &&
 categories.map(category => (
  <CategoryButton
   type='button'
    key={category.id}
    isActiveCategory={activeCategory === category.id}
     onClick={() => {
       setActiveCategory(category.id)
     }}
       >
        {category.name}
        </CategoryButton>
 ))}
</CategoriesMenu>
<ProductsContainer>

  {products &&
  products.map(product => (
    <CardProducts key={product.id} product={product}/>

  ))}

</ProductsContainer>
  </Container>
  )
}
