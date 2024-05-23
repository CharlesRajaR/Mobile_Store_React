import React, { Component } from 'react'
import Title from '../component/Title'
import CartColumns from './CartColumns'
import EmptyCart  from './EmptyCart'
import { ProductConsumer } from '../component/context'
import CartList from './CartList'
import CartTotals from './CartTotals'


export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
            {value => {
                const { cart } = value;
                if(cart.length>0){
                   return(
                 <>
                <Title name="your" title="cart"></Title>
                <CartColumns/>
                <CartList value={value}/>
                <CartTotals value={value}/>
                 </>
                )
                }
                else{
                    return <EmptyCart/>;
                }
                
            }}
        </ProductConsumer>
      </section>
    )
  }
}

