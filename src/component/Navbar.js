import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import { ButtonContainer } from '../Styled/Button';
import { NavWrapper } from '../Styled/Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
{/*         
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
       
        <Link to={'/'}> 
         <img src={logo} alt="store" className='navbar-brand' />
        </Link> 
        
        <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
               <Link to={'/'} className='nav-link'>Products</Link>
            </li>
        </ul>
        <Link to={'/cart'} className='ml-auto'>
            <ButtonContainer>
             <i className="fas fa-cart-plus"></i>
              My Cart
            </ButtonContainer>
        </Link>

      </NavWrapper>
    )
  }
}
