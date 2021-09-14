import { useReducer } from 'react';
import CollectionContext from './context-collection';
import image1 from '../assets/fashion-6251535_1920.jpg';
import image2 from '../assets/holiday-4369987_1920.jpg';
import image3 from '../assets/people-2564803_1920.jpg';
import image4 from '../assets/people-2567915_1920.jpg';
import image5 from '../assets/woman-1245817_1920.jpg';
import image6 from '../assets/woman-1868817_1920.jpg';
const defaultProducts=[
    {
        id:'t1',
        img:image1,
        name:'dress',
        size:'38-44',
        type:'cloths',
        price:100
    },
    {
        id:'t2',
        img:image2,
        name:'T-shirt',
        size:'38-44',
        type:'cloths',
        price:60
    },
    {
        id:'t3',
        img:image3,
        name:'dress',
        size:'2',
        type:'cloths',
        price:10
    },
    {
        id:'t4',
        img:image4,
        name:'Tshirt',
        size:'38-44',
        type:'cloths',
        price:40
    },
     {
        id:'t5',
        img:image5,
        name:'dress',
        size:'38-44',
        type:'cloths',
        price:190
    },
    {
        id:'t6',
        img:image6,
        name:'dress',
        size:'38-44',
        type:'cloths',
        price:70
    }
    , {
        id:'t7',
        img:image1,
        name:'Tshirt',
        size:'38-44',
        type:'cloths',
        price:100
    },
    {
        id:'t8',
        img:image1,
        name:'Tshirt',
        size:'38-44',
        type:'cloths',
        price:100
    },
    {
        id:'t9',
        img:image1,
        name:'backpack',
        size:'38-44',
        type:'bags',
        price:100
    },
    {
        id:'t10',
        img:image1,
        name:'backpack',
        size:'38-44',
        type:'bags',
        price:100
    },
    {
        id:'t11',
        img:image1,
        name:'backpack',
        size:'38-44',
        type:'bags',
        price:100
    },
    {
        id:'t12',
        img:image1,
        name:'children',
        size:'38-44',
        type:'bags',
        price:100
    },
    {
        id:'t13',
        img:image1,
        name:'children',
        size:'38-44',
        type:'bags',
        price:100
    },
    {
        id:'t14',
        img:image1,
        name:'sport',
        size:'38-44',
        type:'shoes',
        price:100
    },
    {
        id:'t15',
        img:image1,
        name:'sport',
        size:'38-44',
        type:'shoes',
        price:100
    },
    {
        id:'t16',
        img:image1,
        name:'sport',
        size:'38-44',
        type:'shoes',
        price:100
    },
    {
        id:'t17',
        img:image1,
        name:'children',
        size:'38-44',
        type:'shoes',
        price:100
    },
    {
        id:'t18',
        img:image1,
        name:'children',
        size:'38-44',
        type:'shoes',
        price:100
    }, {
        id:'t19',
        img:image1,
        name:'watch',
        size:'38-44',
        type:'accessories',
        price:100
    }, {
        id:'t20',
        img:image1,
        name:'watch',
        size:'38-44',
        type:'accessories',
        price:100
    }, {
        id:'t21',
        img:image1,
        name:'rings',
        size:'38-44',
        type:'accessories',
        price:100
    }
];
const defaultCollection={
    items:defaultProducts
   
}

const reducerCollection =(state,action)=>{
    let arr={...defaultCollection};
    state=arr;

if(action.type==='cloths'){
   const clothsCollection= state.items.filter((item)=>{ return item.type==='cloths'});
   console.log(clothsCollection)
 

   return {
       items:clothsCollection,
       
   }
  
}
if(action.type==='bags'){  
    
    const bagsCollection= state.items.filter((item)=>{ return item.type==='bags'});


return {
    items:bagsCollection,
    
}}
if(action.type==='shoes'){
   const shoesCollection= state.items.filter((item)=>{ return item.type==='shoes'});
 

    return {
        items:shoesCollection,
   
    }

}

if(action.type==='accessories'){
    const accessoriesCollection= state.items.filter((item)=>{ return item.type==='accessories'});
  
 
     return {
         items:accessoriesCollection,
   
     }
 
 }

if(action.type==='All'){
  
    return defaultCollection;
}
if(action.type==='FILTERED'){

    return {
        items: action.items
    }
}


return defaultCollection;
}
function CollectionProvider(props){

const [reducedCol,dispatchCol]=useReducer(reducerCollection,defaultCollection);


const ClothsCollectionHandler = () =>{
    dispatchCol({type:'cloths'})
}
const BagsCollectionHandler = () =>{
    dispatchCol({type:'bags'})
}
const ShoesCollectionHandler = () =>{
    dispatchCol({type:'shoes' })
}
const AccessoriesCollectionHandler=()=>{
    dispatchCol({type:'accessories'})
}
const allCollectionHandler = () =>{
    dispatchCol({type:'All'})
}

const  FilteredCollectionHandler = (items) =>{
    dispatchCol({type:'FILTERED' ,items:items})
}

  const returnValue={
 defaultItems: defaultProducts ,
items:reducedCol.items,
onfiltered:FilteredCollectionHandler,
onCloths:ClothsCollectionHandler,
onBags:BagsCollectionHandler,
onShoes:ShoesCollectionHandler,
onAccessories:AccessoriesCollectionHandler,
onAll:allCollectionHandler
  }
    return(
      <CollectionContext.Provider value={returnValue}>{props.children}</CollectionContext.Provider>  
    );
}
export default CollectionProvider;