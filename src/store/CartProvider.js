import {useReducer, useContext} from 'react';
import CartContext from './contex-cart';
import DataContext from './context-data';

const defaultItems={
    items:[],
    totalAmount:0,
    error:'',
    warhouse:0
}

const reducer =(state,action)=>{
   // console.log("state:",state)
if(action.type==='ADD'){

   const product= action.products.filter((item)=>(item.id===action.item.id));
   console.log('ppppppppppppff',product)
   console.log('ppppppppppppff',action.products)
   console.log('ppppppppppppff',product[0].warhouse)
   const totalAmount=state.totalAmount+ action.item.amount*action.item.price;
   
   if(product[0].warhouse>=action.item.amount){

   
console.log('total',totalAmount);
   const existigItemIndex=state.items.findIndex((item)=>item.id===action.item.id);
   console.log("index",existigItemIndex);
   const existingItem=state.items[existigItemIndex];
   
   let updatedItems;
    if(existingItem){
        const x=existingItem.amount+action.item.amount
        if(product[0].warhouse>=x){
     let   updatedItem={...existingItem,amount:existingItem.amount+action.item.amount};
  updatedItems=[...state.items];
updatedItems[existigItemIndex]=updatedItem;
}else{
    return {
        items:[],
        totalAmount:0,
      error:'there are not sufficient number of this product in warhouse ',
      warhouse:product.warhouse
    }
}
    }else{
        updatedItems=state.items.concat(action.item);
    }
    return {
        items:updatedItems,
        totalAmount:totalAmount,
        error:'',
        warhouse:product.warhouse
    }
}else{
    return {
        items:[],
        totalAmount:0,
      error:'there are not sufficient number of this product in warhouse ',
      warhouse:product.warhouse
    }
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
            totalAmount:totalAmount,
            error:'',
            warhouse:0
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
    
    const ctxData = useContext(DataContext);
    console.log("pppppppppppoooooooo",ctxData)
 const [reducedItems,dispatchCart]=useReducer(reducer,defaultItems);

const addItemHandler =(item)=>{
    dispatchCart({type:'ADD', item:item,products:ctxData.items});
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
    error:reducedItems.error,
    warhouse:reducedItems.warhouse,
    onAdd:addItemHandler,
    onDelete:removeItemHandler,
    onSubmitOrder:submitOrderHandler

}

    return(
        <CartContext.Provider value={returnValue}>{props.children}</CartContext.Provider>
    );
}
export default CartProvider;