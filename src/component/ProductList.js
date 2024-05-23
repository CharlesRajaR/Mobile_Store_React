import React, { Component } from 'react'
import Title from './Title'
//import { storeProducts } from '../data'
import { ProductConsumer } from './context';
import Product from './Product';
  
 
export default class ProductList extends Component {

  //  state = {
  //   products:storeProducts,
  // }
  
  render() {
    return (
      <div className='py-5'>
        <div className="container">
          {/* {console.log(this.state.products)} */}
          <Title name='hello'  title='world'/>
          <div className="row">
            <ProductConsumer>
              {(value) => {
                console.log(value.products);
                return value.products.map((product) => {
                  return <Product key={product.id} product={product} />
                })
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    )
  }
}
