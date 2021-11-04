import React,{useContext} from 'react';
import CartContext from '../../store/contex-cart'
import ProductForm from './ProductForm';
import classes from './productItem.module.css';
function ProductItem(props){
   
     
    return(
        <li className={classes.items}>
            <div><img src={require(`./../../assets/${props.image}`).default}/></div>
            <div className={classes.information}>
                <ul>
                    <li>name:{props.name}</li>
                    <li>type:{props.type}</li>
                    <li>price:{props.price}$</li>
                    <li><ProductForm
                    id={props.id} 
                    image={props.image}
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