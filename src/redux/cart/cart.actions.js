import cartActionTypes from "./cart.types";

export const AddItems=item=>({
    type:cartActionTypes.ADD_ITEMS,
    payload:item
});

export const ClearItems=item=>({
    type:cartActionTypes.CLEAR_ITEMS,
    payload:item
});