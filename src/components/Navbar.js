import React from 'react'
import '../App.css';
import user from '../user.png';


function Navbar() {
  return (
    <div className='Navbar'>
        <div className='leftside'>
            Medical Darpan
            <div className='menu'>
              <a href='/home'>Home</a>
              <a href='/products'>Products</a>
              <a href='/distributors'>Distributors</a>
              <a href='/manufacturers'>Manufacturers</a>
              <a href='/aboutus'>About us</a>
              <a href='/blog'>Blog</a>
            </div>
        </div>
        <div className='rightside'>
          <div className='log'><a href='login'>Login</a></div>
          <img src={user} alt=""/>
        </div>
    </div>
  )
}

export default Navbar