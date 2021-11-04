import  React ,{useContext}from 'react';
import InputNumber from '../UI/InputNumber';
import classes from './productForm.module.css';
import CartContext from '../../store/contex-cart';
import CartIcon from '../Cart/CartIcon';

function ProductForm(props){
const  ctxCart=useContext(CartContext);

   let Number=0;
    const getNumberHandler = (num)=>{
 Number= +num;
    }
const submitHandler=(event)=>{
event.preventDefault();
    const product={
        id:props.id,
        image:props.image,
        name:props.name,
        price:props.price,
        amount:Number
    }
console.log(product)
if(Number>0){
    return ctxCart.onAdd(product);
}
  
}

return (
    <form onSubmit={submitHandler}>
        <div>
        <InputNumber onChange={getNumberHandler}/>
        </div>
        <div className={classes.add}>
        <button  type="submit">
             Add to Cart
            </button>
        </div>
    </form>
);
}
export default ProductForm;