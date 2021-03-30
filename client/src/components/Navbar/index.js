import React from 'react';

function Navbar() {
  return(
    <div className='navbar-fixed'>
    <nav>
    <div class="nav-wrapper">
      <a href="/home" className="brand-logo center">Liza Penaloza</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/home">Home</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  </div>
  )
}

export default Navbar;