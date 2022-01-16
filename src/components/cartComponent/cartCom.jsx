import React from "react";
import "../cartComponent/cartCom.scss";

const cartComponent=({name,price,quantity,imageUrl})=>{
  return(
      <div className="cart">
      <h3>NAME:{name}</h3>
      <div className="image" style={{backgroundImage: `url(${imageUrl})`}}  />
      
      <span>QUANTITY:{quantity}</span>
      <span>TOTAL: ₹{price*quantity}</span>
      </div>
  );
};
export default cartComponent;