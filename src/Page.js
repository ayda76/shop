import React from 'react'
import CollectionProvider from './store/CollectionProvider'
import Header from './components/Header/Header'
import Products from './components/products/Products'
function Page(props) {
  // <Header onClick={props.show} />
    return (
      
             < CollectionProvider  >
           
      <div className="page">
      <Products/>
      </div>
      </CollectionProvider>
      
    )
}

export default Page
