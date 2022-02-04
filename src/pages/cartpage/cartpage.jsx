import React from "react";
import { connect } from "react-redux";
import CartCom from "../../components/cartComponent/cartCom";
import "./cartpage.scss";

const cartPage = ({ cartItems }) => {
  return (
    <div className="cartPage">
    <div className="header-block">
    <span className="pro">Product</span>
    <span className="des">Description</span>
    <span className="quan">Quantity</span>
    <span className="amo">Amount</span>
    <span className="rem">Remove</span>
    </div>

      {cartItems.map((item) => (
        <CartCom key={item.id} item={item} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(cartPage);
