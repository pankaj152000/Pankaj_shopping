import React from "react";
import { connect } from "react-redux";
import CartCom from "../../components/cartComponent/cartCom";
import "./cartpage.scss";

const cartPage = ({ cartItems }) => {
  return (
    <div className="cartPage">

      {cartItems.map(({ id, name, price, quantity,imageUrl }) => (
        <CartCom key={id} name={name} price={price} quantity={quantity} imageUrl={imageUrl} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(cartPage);
