import cartActionTypes from "./cart.types";

const AddItems=item=>({
    type:cartActionTypes.ADD_ITEMS,
    payload:item
});
export default AddItems;