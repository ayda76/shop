import React,{useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/contex-cart';
function Cart(props){
  
const ctxCart=useContext(CartContext);
const addHandler =(item)=>{
  const newItem={...item, amount:1 }
  ctxCart.onAdd(newItem);
}

const deleteHandler =(id)=>{
  ctxCart.onDelete(id);
}
const cartItems=ctxCart.items.map((item)=> 
 <CartItem 
 key={item.id}
 id={item.id}
 img={item.img}
 name={item.name}
 size={item.size}
 price={item.price}
amount={item.amount}
onAdd={addHandler.bind(null,item)}
onDelete={deleteHandler.bind(null,item.id)}

 />);
 let status=false;
 if(cartItems.length>0){
status=true;
 }

    return(
      <Modal>

        <ul className={classes.items}>
          <li>  <h3> Total Amount:{ctxCart.totalAmount}$</h3></li>
           {cartItems}
          <li> 
            <button onClick={props.onClick} className={classes.close}>close</button> 
            {status && <button className={classes.order}>order</button>}
        
          </li>
       
        </ul>
       
        
      </Modal>
    );
}
export default Cart;