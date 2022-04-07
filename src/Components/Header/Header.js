import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import {TransitionGroup,CSSTransition} from 'react-transition-group'



const Header = () => {
    const menu = () => {
        const menuBar = document.getElementById('mobile-menu')
        menuBar.style.display='flex'
        document.querySelector('.fa-xmark').style.display='block'
        document.querySelector('.fa-bars').style.display='none'
        document.querySelector('.App').style.backgroundColor='rgba(122, 122, 122, 0.598)'
    }
    const close=()=>{
        const menuBar = document.getElementById('mobile-menu')
        menuBar.style.display='none'
        document.querySelector('.fa-bars').style.display='block'
        document.querySelector('.fa-xmark').style.display='none'
        document.querySelector('.App').style.backgroundColor='white'
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='links' id='links'>
                <a className='link' href="/shop">Shop</a>
                <a className='link' href="/orders">Orders</a>
                <a className='link' href="/inventory">Inventory</a>
                <a className='link' href="/about">About</a>
            </div>

            <i onClick={menu} className="fa-solid fa-bars"></i>
            <i onClick={close} class="fa-solid fa-xmark"></i>
           
                
            <div id='mobile-menu'>
                <a id='shop' href="/shop">Shop</a>
                <a  href="/orders">Orders</a>
                <a  href="/inventory">Inventory</a>
                <a  href="/about">About</a>
            </div>
          
        </nav>
    );
};

export default Header;