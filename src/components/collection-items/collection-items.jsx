import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./collection-items.scss";
import { connect } from "react-redux";

import AddItems from "../../redux/cart/cart.actions";

const collectionItem = ({ item,addItem }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${item.imageUrl})` }}/>
       
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">₹{item.price}</span>
      </div>
      <CustomButton className="customButton" value="Add To Cart" onClick={()=>addItem(item)}></CustomButton>
    </div>
  );
};

const mapDispatchToProps=dispatch=>({
   addItem: item=> dispatch(AddItems(item))
});

export default connect(null,mapDispatchToProps)(collectionItem);
