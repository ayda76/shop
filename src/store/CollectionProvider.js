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


const reducerCollection =(state,action)=>{
  //  let arr={...state.items};
  //let arr={...action.allproducts.items}
  //  state=arr;

if(action.type==='cloths'){
 //  const clothsCollection= state.items.filter((item)=>{ return item.type==='cloths'});
 const clothsCollection =action.allproducts.items.filter((item)=>{ return item.type==='cloths'});
   console.log(clothsCollection)
 

   return {
       items:clothsCollection,
       
   }
  
}
 if(action.type==='bags'){  
    
  //  const bagsCollection= state.items.filter((item)=>{ return item.type==='bags'});
    const bagsCollection =action.allproducts.items.filter((item)=>{ return item.type==='bags'});


return { items:bagsCollection}
}
 if(action.type==='shoes'){

 // const shoesCollection= state.items.filter((item)=>{ return item.type==='shoes'});
 
 const shoesCollection =action.allproducts.items.filter((item)=>{ return item.type==='shoes'});

    return {  items:shoesCollection  }

}

 if(action.type==='accessories'){
   // const accessoriesCollection= state.items.filter((item)=>{ return item.type==='accessories'});
   const accessoriesCollection =action.allproducts.filter((item)=>{ return item.type==='accessories'});

 
     return {   items:accessoriesCollection }
 
 }

 if(action.type==='All'){
  
    return {items:action.allproducts.items};
}
 if(action.type==='FILTERED'){

    return {  items: action.items   }
}

    return {items:action.allproducts.items}
}

function CollectionProvider(props){

    const ctx = useContext( DataContext)
    console.log("ctx",ctx)
    const defaultCollection={
        items:ctx.items
         }

const [reducedCol,dispatchCol]=useReducer(reducerCollection,defaultCollection);


const ClothsCollectionHandler = () =>{
    dispatchCol({type:'cloths',allproducts:defaultCollection})
}
const BagsCollectionHandler = () =>{
    dispatchCol({type:'bags',allproducts:defaultCollection})
}
const ShoesCollectionHandler = () =>{
    dispatchCol({type:'shoes',allproducts:defaultCollection })
}
const AccessoriesCollectionHandler=()=>{
    dispatchCol({type:'accessories',allproducts:defaultCollection})
}
const allCollectionHandler = () =>{
    dispatchCol({type:'All',allproducts:defaultCollection})
}

const  FilteredCollectionHandler = (items) =>{
    dispatchCol({type:'FILTERED' ,items:items,allproducts:defaultCollection})
}

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