import React from 'react'
import CollectionProvider from './store/CollectionProvider'
import Header from './components/Header/Header'
import Products from './components/products/Products'
function Page(props) {
    return (
      
             < CollectionProvider  >
             <div >
      <Header onClick={props.show} />
      </div>
      <div className="page">
      <Products/>
      </div>
      </CollectionProvider>
      
    )
}

export default Page
