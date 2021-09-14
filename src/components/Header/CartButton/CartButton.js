import React,{useContext} from 'react';
import classes from './CartButton.module.css';
import CartIcon from '../../Cart/CartIcon';
import CartContext from '../../../store/contex-cart';
function CartButton(props){
const ctxCart=useContext(CartContext);

console.log(ctxCart.items);
const amount=ctxCart.items.reduce((previous, item) => {
   return previous + item.amount;
}, 0);

    return(
        <React.Fragment>

            <button className={classes.cartButton} onClick={props.onClick}>
                <div className={classes.icon}><i className="fas fa-shopping-cart"></i></div>
               
                <div className={classes.amount}>{amount}</div>
            </button>
        </React.Fragment>
    );
}
export default CartButton;