import React from "react";
import Preview from "../../components/preview-component/preview";
import SHOPDATA from "./shop";

class ShopPage extends React.Component{
    constructor(){
        super();
        this.state={
            collection:SHOPDATA
        }
    }
    render(){
        return(
            <div>
            {
                this.state.collection.map(({id,title,items})=> <Preview key={id} title={title} items={items}></Preview>)
            }
            </div>
        );

    }

};
export default ShopPage;