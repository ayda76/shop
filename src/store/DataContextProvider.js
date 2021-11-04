import React,{useState,useEffect} from 'react'
import DataContext from './context-data'
import useHttp from './../custom-hooks/use-http'
function DataContextProvider(props) {
    const [products,setProducts]=useState([]);
    
    const {fetchingFunction:fetchData}=useHttp();
    useEffect(() => {
        function allData(data){
            let allproducts=[];
            for(const key in data){
                allproducts.push({
                    id:Math.random(),
                    name:data[key].name,
                    price:data[key].price,
                    type:data[key].type,
                    image:data[key].image,
                    warhouse:data[key].warhouse
                  
                })
            }
            setProducts(allproducts)
            
            }
        fetchData({url:"https://onlinestore-ce20c-default-rtdb.firebaseio.com/products.json"},allData)
    }, [])

   const returnValue={items:products}
   
   return(
      <DataContext.Provider value={returnValue}>{props.children}</DataContext.Provider>  
    );
}

export default DataContextProvider
