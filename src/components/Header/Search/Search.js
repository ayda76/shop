import React,{useState,useContext} from 'react';
import classes from './search.module.css'
import CollectionContext from '../../../store/context-collection';
function Search(){
   const [searchingData,setSearchingData]= useState('');
const ctx =useContext(CollectionContext);

const searchedData = (event)=>{
    setSearchingData(event.target.value)
}

let searchData=ctx.defaultItems.filter((item) => {
    return Object.keys(item).some(key =>
       item[key].toString().toLowerCase().includes(searchingData.toString().toLowerCase()) 
        );
})

const submitHandler =(event)=>{
event.preventDefault();
    ctx.onfiltered(searchData);
}

    return(
     
            <form className={classes.search} onSubmit={submitHandler}>
            <input 
            type="text" 
             placeholder="search here"
             value={searchingData}
             onChange={searchedData}
             />
            <button type="submit"><i class="fas fa-search"></i></button>
            </form>
             

       
       
    );
}
export default Search;