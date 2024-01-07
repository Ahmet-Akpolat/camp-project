import React from 'react'
import { Button, MenuItem} from 'semantic-ui-react'

export default function SignedOut(props) {
  return (

    <div>
      <MenuItem>
      <Button primary onClick={props.signIn} >Giriş Yap</Button>
      <Button style={{marginLeft : "0.5em"}} >Kayıt Ol</Button>
      </MenuItem>
    </div>
  )
}
