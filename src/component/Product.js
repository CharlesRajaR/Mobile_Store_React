import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ProductConsumer } from './context'

export default class Product extends Component {
  
  render() {
    const {id, img, inCart, price, title} = this.props.product;

    return (
    <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
      <ProductConsumer>
        {(value) => {
              const{ addToCart, openModel} = value;
          return(
          <div className="card">
      <div className=" img-container p-5" onClick={() => value.handleDetail(id)}>
        <Link to={'/details'}>
          <img src={img} alt="product" className="card-img-top" />
        </Link>
        <button className="cart-btn" disabled={inCart?true:false} onClick={() => {
          addToCart(id);
          openModel(id);}}>
          { inCart ? (<p className='capitalize mb-0' disabled>in Cart</p>
          ):(<i className='fas fa-cart-plus'/>
          )  }
        </button>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <p className="align-self-center mb-0">{title}</p>
        <h5 className="text-blue fontitalic mb-0">
          <span className="mr-1">
            ${price}
          </span>
        </h5>
      </div>
      </div>
        )}}
      </ProductConsumer>
      
    </ProductWrapper>
    )
  }
}


Product.propTypes = {
  Product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    toCart:PropTypes.bool,
  }).isRequired
};

const ProductWrapper = styled.div`

.card{
  border-color:transparent;
  transition:all 1s linear;
}
.card-footer{
  background:transparent;
  border-top:transparent;
  transition:all 1s linear;
}
&:hover{
  .card{
    border:0.04rem solid rgba(0, 0, 0, 0.2);;
    box-shadow:2px 2px 3px 0px rgba(0, 0, 0, 0.2);
  }
  .card-footer{
    background:rgba(247,247,247);
  }
}
.img-container{
  position:relative;
  overflow:hidden;
}

&:hover{ .card-img-top{
 transform:scale(1.2);
 
}}
.card-img-top{
  transition:all 1s linear;
}
.cart-btn{
  position:absolute;
  bottom:0px;
  right:0px;
  padding:0.2rem 0.1rem;
  background:var(--lightBlue);
  border:none;
  color:var(--mainWhite);
  font-size:1.4rem;
  b0rder-radius:0.5rem 0 0 0;
  transform:translate(100% , 100%);
}
.img-container:hover .cart-btn{
  transform:translate(0, 0);
}
.cart-btn:hover{
   color:var(-mainBlue);
   cursor:pointer;
}
`;