import React from 'react';

const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    error:'',
    warhouse:0,
    onAdd:(item)=>{},
    onDelete:(id)=>{}
});
export default CartContext;