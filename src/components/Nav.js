import React from 'react';


const Nav = () => (
    <div>
     <nav className="navbar navbar-light bg-custom" style={{background: '#E87610'}}>
      <h2>Flat Top Eats</h2>
      <div className='row'>
        <div className='col-sm'>
         <i class="fab fa-instagram fa-2x"></i>
        </div>
        <div className='col-sm'>
         <i class="fab fa-twitter fa-2x"></i>
        </div>
        <div className='col-sm'>
         <i class="fa fa-envelope fa-2x"></i>
        </div>
      </div>
     </nav>
    </div>
)

export default Nav;

