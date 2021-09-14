import React,{useContext} from 'react';
import CollectionContext from '../../../store/context-collection';
import classes from './Menu.module.css';
function Menu(){
   const ctx= useContext(CollectionContext);
 
  
    const getOptionHandler=(event)=>{
      const category=event.target.value;
      
      
      if(category==='cloths'){
          ctx.onCloths();
      
         
      }
      if(category==='bags'){
          ctx.onBags();
       
      }
      if(category==='shoes'){
          ctx.onShoes();
       
      }
      if(category==='accessories'){
          ctx.onAccessories()
         
      }
      if(category==='All'){
          ctx.onAll();
      }
    }
    return(
        <React.Fragment>
  
         <select name="Categories"  id="cat" className={classes.dropdown} onChange={getOptionHandler}>
       
            <option value="">Categories</option>
            <option value="cloths">cloths</option>
            <option value="bags">bags</option>
            <option value="shoes">shoes</option>
            <option value="accessories">accessories</option>
            <option value="All">All</option>
            </select>
  
          
      </React.Fragment>
    );
}
export default Menu;