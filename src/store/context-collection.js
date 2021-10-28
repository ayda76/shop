import React from 'react';

const CollectionContext=React.createContext(  {
    id:'',
    name:'',
    type:'',
    price:0,
    defaultItems:[],
    items:[],
    onCloths:()=>{},
    onBags:()=>{},
    onShoes:()=>{},
    onAccessories:()=>{},
    onAll:()=>{},
    onfiltered:(items)=>{}
});
export default CollectionContext;