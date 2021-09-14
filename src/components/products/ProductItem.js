import React from 'react';

import ProductForm from './ProductForm';
import classes from './productItem.module.css';
function ProductItem(props){

    return(
        <li className={classes.items}>
            <div><img src={props.img}/></div>
            <div className={classes.information}>
                <ul>
                    <li>name:{props.name}</li>
                    <li>size:{props.size}</li>
                    <li>type:{props.type}</li>
                    <li>price:{props.price}$</li>
                    <li><ProductForm
                    id={props.id} 
                    img={props.img}
                    name={props.name}
                     size={props.size}
                      type={props.type}
                      price={props.price}
                      /></li>
                </ul>
            </div>
           
        </li>
    );
}
export default ProductItem;