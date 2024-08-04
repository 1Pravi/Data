import React from 'react';
import './Header.css';

const Header = ({ isOpen }) => {
    return (
        <div className={`header ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <h1>Data Analytics Dashboard</h1>
        </div>
    );
};

export default Header;
