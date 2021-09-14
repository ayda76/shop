import React,{useContext} from 'react';
import classes from './products.module.css';
import ProductItem from './ProductItem';

import CollectionContext from '../../store/context-collection';

function Products(props){
const ctx=useContext(CollectionContext);

console.log(ctx);

    const productItems=ctx.items.map((item)=>(
    <ProductItem
     key={item.id}
     id={item.id}
      name={item.name}
       img={item.img}
        size={item.size}
        type={item.type}
        price={item.price}
        />));
    return(
        <ul className={classes.products}>
         {productItems}
        </ul>
    );
}
export default Products;