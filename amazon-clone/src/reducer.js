export const initialState = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "DELETE_FROM_CART":
        const index = state.cart.findIndex(
            (cartItem) => cartItem.id === action.id
        );
        let newCart = [...state.cart];
        if(index>=0){
            newCart.splice(index, 1);
        } else {
            console.warn(`Error`)
        }
        return {
            ...state,
            cart: newCart
        }
      // return {
      //   ...state,
      //   cart: state.cart.filter(item => item.id !== action.id)
      // };
    default:
      return state;
  }
};

export default reducer;
