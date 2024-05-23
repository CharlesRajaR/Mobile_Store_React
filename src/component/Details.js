import React, { Component } from 'react'
import { ProductConsumer } from './context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from '../Styled/Button'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          //console.log(value.detailProduct)
          const {id, company, img, info, price, title, inCart} = value.detailProduct;
          return(
            <div className="container py-5">
             <div className="row">
              <div className="col-10 mxauto text-center text-slanted text-blue">
                <h1>{title}</h1>
              </div>
             </div>
             <div className="row">
              <div className="col-10 mx-quto col-md-6 my-3">
                <img src={img} alt="product"  className='img-fluid'/>
                 <h3 className="text-title text-blue text-center">Price:${price}</h3>
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>Model:{title}</h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  Made By:
                  <span className='text-uppercase'>{company}</span>
                  </h4>
                  <p className="text-capialize font-weight-bold md-3 mb-0">
                    Some Info About Product:
                  </p>
                  <p className="textmuted lead">{info}</p>
                  <div>
                    <Link to={'/'}><ButtonContainer>
                      Back To Store
                      </ButtonContainer></Link>

                      <ButtonContainer $cart disabled={inCart?true:false}
                      onClick={() => {value.addToCart(id);
                                      value.openModel(id);}}>
                       {inCart?'in Cart':'add to cart'}
                      </ButtonContainer>
                  </div>
              </div>
             </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
}}
