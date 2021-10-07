import React,{useCallback} from 'react';

function useHttp() {
   const fetchingFunction= useCallback(async(configData,myFunction)=>{
     const response=await fetch(configData.url,{
          method:configData.method?configData.method:'GET',
          body:JSON.stringify(configData.body)?JSON.stringify(configData.body) :null,
          headers:configData.headers?configData.headers:{}
      })
      if(!response.ok){
        throw new Error('something went wrong!');
        }
     const data= await response.json();
     myFunction(data);

   },[]);

   return{fetchingFunction}
}

export default useHttp