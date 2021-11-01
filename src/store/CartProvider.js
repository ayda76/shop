import React,{useReducer} from 'react';
import CartContext from './contex-cart';

const defaultItems={
    items:[],
    totalAmount:0
}

const reducer =(state,action)=>{
    console.log("state:",state)
if(action.type==='ADD'){
    const totalAmount=state.totalAmount+ action.item.amount*action.item.price;
console.log('total',totalAmount);
   const existigItemIndex=state.items.findIndex((item)=>item.id===action.item.id);
   console.log("index",existigItemIndex);
   const existingItem=state.items[existigItemIndex];
   
   let updatedItems;
    if(existingItem){
     let   updatedItem={...existingItem,amount:existingItem.amount+action.item.amount};
  updatedItems=[...state.items];
updatedItems[existigItemIndex]=updatedItem;
    }else{
        updatedItems=state.items.concat(action.item);
    }
    return {
        items:updatedItems,
        totalAmount:totalAmount
    }

}
if(action.type==='DELETE'){
 
    const existigItemIndex=state.items.findIndex((item)=>item.id===action.id);
    const existingItem=state.items[existigItemIndex];
    const totalAmount= state.totalAmount - existingItem.price;
    if(existingItem){
        let updatedItems=[...state.items];
        if(existingItem.amount===1){
             updatedItems= state.items.filter((item)=>{return item.id!==existingItem.id})  
        }else{
           
              const amount=existingItem.amount - 1;
             let updatedItem={...existingItem, amount:amount};
            updatedItems[existigItemIndex]=updatedItem;
    
        }

        return {
            items:updatedItems,
            totalAmount:totalAmount
        }
    }else{
      return
    }
}
if(action.type==='SUBMITED'){
    return defaultItems
}

return defaultItems;

}
function CartProvider(props){
 const [reducedItems,dispatchCart]=useReducer(reducer,defaultItems);

const addItemHandler =(item)=>{
    dispatchCart({type:'ADD', item:item});
}
const removeItemHandler =(id)=>{
    dispatchCart({type:'DELETE', id:id})
}
const submitOrderHandler =()=>{
    dispatchCart({type:'SUBMITED'})
}
const returnValue={
    items:reducedItems.items,
    totalAmount:reducedItems.totalAmount,
    onAdd:addItemHandler,
    onDelete:removeItemHandler,
    onSubmitOrder:submitOrderHandler

}

    return(
        <CartContext.Provider value={returnValue}>{props.children}</CartContext.Provider>
    );
}
export default CartProvider;