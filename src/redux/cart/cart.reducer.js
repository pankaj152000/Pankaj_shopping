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
        default: 
           return {...state};
        
         
    }
};

export default cartReducer;