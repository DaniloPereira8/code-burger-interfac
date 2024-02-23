import React from 'react'

import propTypes from 'prop-types'

import { CartProvider } from './CartContext'
import { UserProvider } from './UserContext'

const AppProvider = ({ children }) => (
<UserProvider>
  <CartProvider>{children}</CartProvider>
  </UserProvider>
)

AppProvider.propTypes = {
  children: propTypes.node
}

export default AppProvider
