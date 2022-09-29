import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <nav className='header'>
                <label className='logo'>Fitness Heroes</label>
                <label for="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                </label>
            
            <ul>
                <li><a className='active' href="/Home">Home</a></li>
                <li><a href="/Order-Review">About</a></li>
                <li><a href="/Manage-Inventory">Manage Inventory</a></li>
                <li><a href="/Login">Login</a></li>
            </ul>
        </nav>
        </div>
    );
};

export default Nav;