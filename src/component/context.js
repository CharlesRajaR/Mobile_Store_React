import React, { Component } from 'react'
import { storeProducts, detailProduct } from '../data';

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;


class ProductProvider extends Component {
  state ={
  products:storeProducts,
  detailProduct:detailProduct,
  cart:[],
  modelOpen:false,
  modelProduct:detailProduct,
  cartSubTotal:0,
  CartTax:0,
  cartTotal:0
}

componentDidMount(){
  this.setProducts();
}

setProducts = () => {
  let tempProducts = [];
  storeProducts.forEach(item => {
    const singleItem = {...item};
    tempProducts = [...tempProducts, singleItem];
  });
  this.setState(() => {
    return { products:tempProducts }
  })
};

getIem = (id) => {
  const product = this.state.products.find(item => item.id === id)
  return product;
};

handleDetail = (id) => {
   const product = this.getIem(id);
   this.setState(() => {
    return{
      detailProduct:product
    }
   })
  }
addToCart = (id )=> {
  let tempProducts = [...this.state.products];
  const index = tempProducts.indexOf(this.getIem(id));
  const product = tempProducts[index];
  product.inCart = true;
  product.count = 1;
  const price = product.price;
  product.total = price;
  this.setState(() => {
    return {
      products:tempProducts,
      cart:[...this.state.cart, product]
    };
  },() => {
    // console.log(this.state);
    this.addTotals();
  })
}

openModel = id => {
  const product = this.getIem(id);
  this.setState(() => {
    return{
      modelProduct:product,
      modelOpen:true,

    }
  })
}

closeModel = () => {
  this.setState(() => {
    return{
      modelOpen:false

    }
  })
}


increment = (id) => {
  //  console.log('value s incremented')
  let tempCart = [...this.state.cart];
  const selectedProduct = tempCart.find(item => item.id === id);
  const index = tempCart.indexOf(selectedProduct);
  const product = tempCart[index];
  product.count = product.count + 1;
  product.total = product.count * product.price;

  this.setState(() =>{
    return{
      cart:[...tempCart]
        }
  },()=>{
    this.addTotals();
  })

}

decrement = (id) => {
  //  console.log('value s decremented')
  let tempCart = [...this.state.cart];
  const selectedProduct = tempCart.find(item => item.id === id);
  const index = tempCart.indexOf(selectedProduct);
  const product = tempCart[index];
  product.count = product.count - 1;
  if(product.count === 0){
    this.removeItem(id);
  }
  else{
      product.total = product.count * product.price;
       this.setState(() =>{
    return{
      cart:[...tempCart]
        }
  },()=>{
    this.addTotals();
  })
  }
}

removeItem = (id) => {
  let tempProducts = [...this.state.products];
  let tempCart = [...this.state.cart];
  tempCart = tempCart.filter((cartItem) => cartItem.id !== id);
  const index = tempProducts.indexOf(this.getIem(id));
  let removedProduct = tempProducts[index];
  removedProduct.inCart=false;
  removedProduct.count = 0;
  removedProduct.total=0;

  this.setState(() =>{
    return{
      cart:[...tempCart],
      product:[...tempProducts]
    }
  },()=>{
    this.addTotals();
  })

  //  console.log('value is removed')
}

clearCart = (id) => {
  //  console.log('cart os cleared')
  this.setState(() => {
    return{
      cart:[]
    }
  },() => {
    this.addTotals();
    this.setProducts();
  })
}

addTotals = () =>{
  let subTotal = 0;
  this.state.cart.map(item => subTotal+=item.total);
  const tempTax = subTotal*0.1;
  const Tax = parseFloat(tempTax.toFixed(2));
  const Total = subTotal + Tax;
  this.setState(() =>{
    return{
      cartSubTotal:subTotal,
      cartTax:Tax,
      cartTotal:Total,
    }
  })
}
  render() {
    return (
    <ProductContext.Provider value={{...this.state,
      handleDetail:this.handleDetail,
      addToCart:this.addToCart,
      openModel:this.openModel,
      closeModel:this.closeModel,
      increment:this.increment,
      decrement:this.decrement,
      removeItem:this.removeItem,
      clearCart:this.clearCart
    }}>
    {this.props.children}
     </ProductContext.Provider>
    );
  }
}

export {ProductProvider, ProductConsumer};
