import React from "react";
import "../custom-button/custom-button.scss";

const customButton=({type,value,onClick})=>{
    return( <button className="customButton" type={type} onClick={onClick}>{value}</button>);

}
export default customButton;