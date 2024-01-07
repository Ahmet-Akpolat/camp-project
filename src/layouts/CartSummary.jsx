import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Dropdown, DropdownDivider, DropdownItem, DropdownMenu, Label } from 'semantic-ui-react'

export default function CartSummary() {

const {cartItems} = useSelector(state => state.cart);

  return (
    <div>
       <Dropdown pointing="top right" style={{ marginTop: "0.5em" }} item text='Sepet'>
        <DropdownMenu>
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((cartItem, index) => (
                <DropdownItem key={index}>
                  {cartItem.product.title}
                  <Label color='blue' style={{ marginLeft: "5px", marginRight: "0px" }}>
                    {cartItem.quantity}
                  </Label>
                </DropdownItem>
              ))}
              <DropdownDivider />
              <DropdownItem as={NavLink} to="/cart" icon="cart" text="Sepete Git" />
            </>
          ) : (
            <DropdownItem disabled text="Sepet Boş" />
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
         