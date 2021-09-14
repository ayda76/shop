import React from 'react';
import classes from './CartItem.module.css';

function CartItem(props){
    
    return (
        <React.Fragment>
            
                <li className={classes.cartItem}>
                    <ul>
                        <li><img src={props.img} /></li>
                        <li>name:{props.name}</li>
                        <li>price:{props.price}$</li>
                        <li>Qty:{props.amount}</li>
                        <li><button className={classes.mines} onClick={props.onDelete}>-</button></li>
                        <li><button className={classes.plus} onClick={props.onAdd}>+</button></li>
                    </ul>
                </li>
           
        </React.Fragment>
    );
}
export default CartItem;