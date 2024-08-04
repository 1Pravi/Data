import React, { useState } from 'react';
import { FaBars, FaChartPie, FaChartLine, FaChartBar, FaTimes } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true); // Sidebar is open by default

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="toggle-button" onClick={toggleSidebar}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-header">
                    <h2>Dashboard</h2>
                </div>
                <div className="sidebar-content">
                    <button className="sidebar-button">
                        <FaChartPie className="icon" /> Overview
                    </button>
                    <button className="sidebar-button">
                        <FaChartLine className="icon" /> Sales
                    </button>
                    <button className="sidebar-button">
                        <FaChartBar className="icon" /> Performance
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
