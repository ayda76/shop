import React,{useContext} from 'react';
import classes from './CartButton.module.css';
import CartIcon from '../../Cart/CartIcon';
import CartContext from '../../../store/contex-cart';
import {Link} from 'react-router-dom';
function CartButton(props){
const ctxCart=useContext(CartContext);

console.log(ctxCart.items);
const amount=ctxCart.items.reduce((previous, item) => {
   return previous + item.amount;
}, 0);
//<button className={classes.cartButton} onClick={props.onClick}>
    return(
        <React.Fragment>
      <Link to="/cart" >
            <button className={classes.cartButton} >
                <div className={classes.icon}><i className="fas fa-shopping-cart"></i></div>
               
                <div className={classes.amount}>{amount}</div>
            </button>
            </Link>
        </React.Fragment>
    );
}
export default CartButton;