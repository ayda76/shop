import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './components/Cart/Cart';
import Products from './components/products/Products';
import Header from './components/Header/Header'
import CollectionProvider from './store/CollectionProvider';
import ErrorBoundary from './components/ErrorBoundary'
import CartProvider from './store/CartProvider';
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
    {isVisibel &&  <Cart onClick={closeHandler}/>} 
       < CollectionProvider  >
    
       <div >
      <Header onClick={showHandler} />
      </div>
      <div className="page">
      <Products/>
      </div>
      </CollectionProvider>
      </ErrorBoundary>
      
  );
}

export default App;
