import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuItem, Menu } from 'semantic-ui-react'

export default function Categories() {
  const goTo = useNavigate()

  return (
    <div>
        <Menu pointing vertical>
        <MenuItem
          name='home'
          onClick={() => {goTo("/")}}
        />
        <MenuItem
          name='Surveys'
          onClick={() => {goTo("/surveys")}}
        />
        <MenuItem
          name='Products'
          onClick={() => {goTo("/products")}}
        />
        <MenuItem
          name='Add Survey'
          onClick={() => {goTo("/survey/add")}}
        />
      </Menu>
    </div>
  )
}

