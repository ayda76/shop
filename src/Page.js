import React,{useContext} from 'react'
//import CollectionProvider from './store/CollectionProvider'
//import Header from './components/Header/Header'
import Products from './components/products/Products'
//import Silder from './components/Slider/Silder'
//import DataContextProvider from'./store/DataContextProvider'

function Page(props) {
 
  // <Header onClick={props.show} />
  /**
   * 
      <div className="slider">
              <Silder />
      </div>
   */
    return (
      
              <>
            
        
      <div className="page">
      <Products/>
      </div>
      </>
      
    )
}

export default Page
