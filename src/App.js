import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './components/Cart/Cart';

import ErrorBoundary from './components/ErrorBoundary'
import DataContextProvider from './store/DataContextProvider';
import Page from './Page';
//import CartProvider from './store/CartProvider';
function App() {
const [isVisibel,setVisibel]=useState(false);
  const closeHandler =()=>{
    setVisibel(false);
  }
 const showHandler =()=>{

  setVisibel(true);
 }

  return (
    
      <ErrorBoundary>
        <DataContextProvider>
    {isVisibel &&  <Cart onClick={closeHandler}/>} 
      <Page show={showHandler}/>
      </DataContextProvider>
      </ErrorBoundary>
      
  );
}

export default App;
