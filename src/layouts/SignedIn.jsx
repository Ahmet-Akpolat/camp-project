import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, Image, MenuItem } from 'semantic-ui-react'

export default function SignedIn(props) {
  return (
    <div>
      <MenuItem>
        <Image avatar spaced="right" src="https://media.licdn.com/dms/image/D5603AQElBgJVqWE7xQ/profile-displayphoto-shrink_200_200/0/1696541821025?e=2147483647&v=beta&t=ChjhkzD1JVFe4yF86ZNrUK1J9G2e-mPg2TOK4Kn6Mw4"/>
        <Dropdown pointing="top right" text='Ahmet' >
          <DropdownMenu>
            <DropdownItem text="Bilgilerim" icon="info" />
            <DropdownItem onClick={props.signOut} text="Çıkış Yap" icon="sign-out" />
          </DropdownMenu>
        </Dropdown>
      </MenuItem>
    </div>
  )
}
