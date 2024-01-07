import { addToCart, removeFromCart, ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems:cartItems
}

export default function cartReducer(state=initialState,{type,payload}) {
  switch (type) {
    case ADD_TO_CART:
        let product = state.cartItems.find(c=>c.product.id === payload.id)
        if (product) {
          // Yeni bir cartItems listesi oluştur
          const newCartItems = state.cartItems.map(cartItem =>
            cartItem.product.id === payload.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
          );
        
          return {
            ...state,
            cartItems: newCartItems
          };
        } else {
          return {
            ...state,
            cartItems:[...state.cartItems, {quantity:1,product:payload}]
          }
        }
        case REMOVE_FROM_CART:
          return {
            ...state,
            cartItems: state.cartItems.filter(c => c.product.id !== payload.id)
          }
    default:
        return state;
  }
}
