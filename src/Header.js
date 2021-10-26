import './Header.css';
import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Search from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from "react-router-dom";
import { useStateValue } from './StateProvider'




function Header() {
    const [{ cart, user }, dispatch] = useStateValue();

    const history = useHistory();

    function goHome(){
      history.push('/home');
    }

    function goToLogin(){
      history.push('/login');
    }

    function goToCart(){
      history.push('/cart');
    }

    function goToOrders(){
      history.push('/orders')
    }

    return (
      <div className="Header">
        <HomeIcon id='homeButton' onClick={goHome}/>
        <input id='searchBar'/>
        <Search id='searchIcon'/>
        <span>{user ? user : <Button className='Buttons' id="loginButton" variant="contained" onClick={goToLogin}>Login</Button>}</span>
        <Button className='Buttons' id="orderButton" variant="contained" onClick={goToOrders}>Orders</Button>
        <ShoppingCartIcon id='cartIcon' onClick={goToCart}/>
        <p id='cartCount'>{cart.length}</p>
      </div>
  );
}


export default Header;
