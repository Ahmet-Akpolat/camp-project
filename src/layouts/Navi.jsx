import React, { useState } from 'react'
import {
  MenuMenu,
  MenuItem,
  Menu,
  Container,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useNavigate } from 'react-router-dom'

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const goTo = useNavigate()

function handleSignIn(params) {
  setIsAuthenticated(true)
}

function handleSignOut(params) {
    setIsAuthenticated(false)
    goTo("/")
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
        <MenuItem name='home' onClick={() => {goTo("/")}} />
        
        <MenuMenu position='right'>
          {isAuthenticated?<CartSummary/> : null } 
          {isAuthenticated?<SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} /> }
        </MenuMenu>
        </Container>
      </Menu>
    </div>
  )
}
