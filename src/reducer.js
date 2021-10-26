export const initialState = {
  cart: [],
  user: null,
  orders: []
}


const reducer = (state, action) => {

  switch (action.type){
  case 'SET_USER':
    return {
        ...state,
        user: action.user
      }


  case "ADD_TO_CART":
    return {
      ...state,
      cart: [...state.cart, action.item]
    }

  case 'REMOVE_FROM_CART':

    let newCart = state.cart

    for(let i = 0; i < newCart.length; i++){
      //console.log(i, newCart[i], action.item)
      if(newCart[i]['id'] == action.item){
        newCart.splice(i, 1)
        break
      }
    }


    return {
      ...state,
      cart: [...newCart]
    }

    case 'ADD_TO_ORDERS':

    return {
      ...state,
      cart:[],
      orders: [...state.orders, state.cart]
    }


    case 'SET_ORDERS':

    return {
      ...state,
      orders: action.item
    }


    default:
      return state
  }

}

export default reducer;
