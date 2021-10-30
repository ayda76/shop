import { useReducer ,useContext} from 'react';
import CollectionContext from './context-collection';
import DataContext from './context-data'

/*
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
  
];*/
const defaultCollection={
    items:[]
     }

const reducerCollection =(state,action)=>{
  //  let arr={...state.items};
  //let arr={...action.allproducts.items}
  //  state=arr;

if(action.type==='cloths'){
    console.log("first state:",state.items)
    
 //  const clothsCollection= state.items.filter((item)=>{ return item.type==='cloths'});
 const clothsCollection =action.all.filter((item)=>{ return item.type==='cloths'});
   console.log("cloths:",clothsCollection)
   

   return  {items:clothsCollection    }  
  
}
 if(action.type==='bags'){  
    console.log("bag state:",state.items)
  //  const bagsCollection= state.items.filter((item)=>{ return item.type==='bags'});
  const bagsCollection =action.all.filter((item)=>{ return item.type==='bags'});
  console.log("bags:",bagsCollection)

return   {items:bagsCollection    } 
}
 if(action.type==='shoes'){

 // const shoesCollection= state.items.filter((item)=>{ return item.type==='shoes'});
 
 const shoesCollection =action.all.filter((item)=>{ return item.type==='shoes'});

    return   {items:shoesCollection    } 

}

 if(action.type==='accessories'){
   // const accessoriesCollection= state.items.filter((item)=>{ return item.type==='accessories'});
   const accessoriesCollection=action.all.filter((item)=>{ return item.type==='accessories'});

 
     return  {items:accessoriesCollection   }
 
 }

 if(action.type==='All'){
  
    return {items:action.all}
}
 if(action.type==='FILTERED'){

    return {items:action.items   }
}

    return {items:action.all}
}

function CollectionProvider(props){
    const ctx = useContext( DataContext)
    defaultCollection.items=ctx.items;
const [reducedCol,dispatchCol]=useReducer(reducerCollection, defaultCollection);


console.log("ctx",ctx)

const ClothsCollectionHandler = () =>{
    console.log('we got to handler')
    dispatchCol({type:'cloths',all:defaultCollection.items})
}
const BagsCollectionHandler = () =>{
    dispatchCol({type:'bags', all:defaultCollection.items})
}
const ShoesCollectionHandler = () =>{
    dispatchCol({type:'shoes' ,all:defaultCollection.items})
}
const AccessoriesCollectionHandler=()=>{
    dispatchCol({type:'accessories',all:defaultCollection.items})
}
const allCollectionHandler = () =>{
    dispatchCol({type:'All'})
}

const  FilteredCollectionHandler = (items) =>{
    dispatchCol({type:'FILTERED' ,items:items})
}
console.log('empty:',reducedCol.items)
  const returnValue={
 defaultItems: ctx.items ,
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