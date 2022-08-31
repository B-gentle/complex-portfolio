import React from 'react';
import Toggle from '../toggle/Toggle';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <div className='navName'>
                <h1>Bright</h1>
                <Toggle/>
            </div>
            <div className='nav-list'>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Educational  Qualification</li>
                    <li>Testimonial</li>
                </ul>
                <button className='button'>Contact</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar