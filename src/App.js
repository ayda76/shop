import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './components/Cart/Cart';
import Login from './components/login/Login'
import SignUp from './components/login/SignUp';
import ErrorBoundary from './components/ErrorBoundary'
import DataContextProvider from './store/DataContextProvider';
import Page from './Page';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './components/Header/Header';
import CollectionProvider from './store/CollectionProvider';
import UserContextProvider from './store/UserContextProvider';
import Products from './components/products/Products'
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
        <UserContextProvider>
        <DataContextProvider>
          <CollectionProvider>

          
           
          
        <Router>
    {isVisibel &&  <Cart onClick={closeHandler}/>} 

    <Header />
      <Switch>
      <Route path="/" exact   component={Page }/>
      <Route path="/products" exact   component={Products }/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/cart" component={Cart}/>
      </Switch>
      </Router>
      </CollectionProvider>
      </DataContextProvider>
      </UserContextProvider>
      </ErrorBoundary>
     
  );
}

export default App;
