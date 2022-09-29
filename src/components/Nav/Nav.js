import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <nav className='header'>
            <div>
            <h4 className='logo'>Fitness Heroes</h4>
            </div>
            <div>
                <a href="/Order">Order</a>
                <a href="/Order-Review">Order Review</a>
                <a href="/Manage-Inventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </div>
        </nav>
        </div>
    );
};

export default Nav;