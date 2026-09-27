import React from 'react'
// import netlinksLogo from ''
import './Navbar.css'
export default function Navbar() {
  return (
    <div className='navbar-div'>

      <img src="https://netlinks.af/_astro/logo.DUySRYvR_2j5iRN.avif" alt="netlinks logo" />

      <ul className='nav-links'>
        <li><a href="#">Solution <i class="fa-solid fa-chevron-down"></i></a></li>
        <li><a href="#">Services <i class="fa-solid fa-chevron-down"></i></a></li>
        <li><a href="#">Industries <i class="fa-solid fa-chevron-down"></i></a></li>
        <li><a href="#">Partners <i class="fa-solid fa-chevron-down"></i></a></li>
        <li><a href="#">Company <i class="fa-solid fa-chevron-down"></i></a></li>
      </ul>

      <button className='nav-btn'>Get started ↗</button>
    </div>
  )
}
