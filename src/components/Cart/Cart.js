import React,{useContext,useState} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/contex-cart';
import CartForm from './CartForm';
import useHttp from '../../custom-hooks/use-http';
function Cart(props){
 const[showFrom,setShowForm]= useState(false);
 const {fetchingFunction:fetchData}= useHttp();
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
 const openForm=()=>{
  setShowForm((pre)=>{ return !pre});
 }

 const submitOrder=(orderData)=>{
const orderItem={
  customer:orderData,
  order:ctxCart.items
}
fetchData({url:"https://onlinestore-ce20c-default-rtdb.firebaseio.com/orders.json",
method:'POST',
body:orderItem
},()=>{});

 }
    return(
     

        <ul className={classes.items}>
          <li>  <h3> Total Amount:{ctxCart.totalAmount}$</h3></li>
           {cartItems}
          <li> 
            {!showFrom &&  <button onClick={props.onClick} className={classes.close}>close</button>}
            
            {!showFrom &&status && <button className={classes.order} onClick={openForm}>order</button>}
        {showFrom &&    <CartForm getOrder={submitOrder} onClose={props.onClick}/>}
     
          </li>
       
        </ul>
       
        
   
    );
}
export default Cart;