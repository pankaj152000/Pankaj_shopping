import cartActionTypes from "./cart.types";
import {addItemToCart} from "./cart.util"
const CART_INITIAL_STATE={
     cartItems:[],
     
}

const cartReducer=(state = CART_INITIAL_STATE, action)=>{
    switch(action.type){
        case cartActionTypes.ADD_ITEMS:
            return{
               ...state,
               cartItems:addItemToCart(state.cartItems,action.payload)
            };

        case cartActionTypes.CLEAR_ITEMS:
            return{
              ...state,
              cartItems:state.cartItems.filter(cartItem=>cartItem.id!== action.payload.id)
            };   
        default: 
           return {...state};
        
         
    }
};

export default cartReducer;