import React from "react";
import "../cartComponent/cartCom.scss";
import { connect } from "react-redux";
import  {ClearItems} from "../../redux/cart/cart.actions";

const cartComponent=({item,clearItem})=>{
  return(
      <div className="cart">
     
      <div className="image-container">
      <img src={item.imageUrl} alt="popo"></img>
      </div>
      <h4 className="name">{item.name}</h4>
      <span className="quantity">{item.quantity}</span>
      <span className="price">₹{item.price*item.quantity}</span>
      <span className="remove" onClick={()=>clearItem(item)}>x</span>
      </div>
  );
};

const mapDispatchToProps=dispatch=>({
  clearItem: item=>dispatch(ClearItems(item))
});
export default connect(null,mapDispatchToProps)(cartComponent);