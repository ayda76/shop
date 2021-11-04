import React,{useState,useContext,useEffect,useCallback} from 'react';
import classes from './products.module.css';
import ProductItem from './ProductItem';
import CartContext from '../../store/contex-cart';
import CollectionContext from '../../store/context-collection';
import CartProvider from '../../store/CartProvider';
//import Modal from './../UI/Modal';
function Products(props){
const ctx=useContext(CollectionContext);
const ctxCart = useContext(CartContext)
let error='';
if(ctxCart.error!==''){

error=<p>!{ctxCart.error}!</p> ;
}
let productItems=[];

console.log("items in product",ctx.items);
productItems=ctx.items.map((item)=>(
    <ProductItem
     key={item.id}
     id={item.id}
      name={item.name}
       image={item.image}
        size={item.size}
        type={item.type}
        price={item.price}
        />) );

    return(
       
        <ul  className={classes.products}>
    
         {productItems}
        </ul>
       
    );
}
export default Products;