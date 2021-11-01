import React,{useContext,useState} from 'react';
//import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/contex-cart';
//import CartForm from './CartForm';
import useHttp from '../../custom-hooks/use-http';
import UserContext from '../../store/context-userlog';
import {Link} from'react-router-dom';
import Header from '../Header/Header';
function Cart(props){
  const context = useContext(UserContext);
// const[showFrom,setShowForm]= useState(false);
const[state,setState]= useState(true);
const[afterLogin,setafterLogin]= useState(true);
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
/* const openForm=()=>{
  setShowForm((pre)=>{ return !pre});
 }*/

 const submitOrder=()=>{
   console.log("this user",context.user)
   if(context.user.length!==0){
     
const orderItem={
  customer:context.user,
  order:ctxCart.items
}

fetchData({url:"https://onlinestore-ce20c-default-rtdb.firebaseio.com/orders.json",
method:'POST',
body:orderItem
},()=>{});
ctxCart.onSubmitOrder();
setafterLogin(false);
}else{
 setState(false)
console.log("here is not login")

}
 }

 // {showFrom &&    <CartForm getOrder={submitOrder} onClose={props.onClick}/>}
 //{!showFrom &&  <button onClick={props.onClick} className={classes.close}>close</button>}
            
 //{!showFrom &&status && <button className={classes.order} onClick={openForm}>order</button>}

    return(
     
<React.Fragment>

        <ul className={classes.items}>
          <li> {afterLogin&& <h3> Total Amount:{ctxCart.totalAmount}$</h3>}</li>
           {afterLogin&& cartItems}
          <li>  
            {!afterLogin &&<p>Your order is submited!</p>}
           {!state&& <Link to="/login"><button className={classes.order}>first you should log in</button></Link>}
             {state&&  <button onClick={props.onClick} className={classes.close}>close</button>}
            
             {state&&  <button className={classes.order} onClick={submitOrder}>order</button>}
       
     
          </li>
       
        </ul>
       
        </React.Fragment>
   
    );
}
export default Cart;