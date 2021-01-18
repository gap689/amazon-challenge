export const initialState = {
    basket: [],
    user: null
  };
  
  // Selector,  (used in production environments)
  export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0); //item price adds to the total amount
  
    const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            const index= state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket]; //copy the basket into a temporary variable: [...state.basket] copy whatever the state.basket currently has
                if (index >= 0) {
                    newBasket.splice(index, 1); // pass the index and then splice it by one,
                } else {
                    console.warn(
                        `can't remove product: (id: ${action.id}) as its not in the basket`)
                }

                return{
                    ...state,
                    basket: newBasket

                }

            case "SET_USER":
                return {
                    ...state,
                    user: action.user,
                }
      default:
        return state;
    }
  };
  
  export default reducer;