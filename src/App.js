import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="app">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <div className="main-content">
                <Header isOpen={isOpen} />
                <Dashboard isOpen={isOpen} />
            </div>
        </div>
    );
};

export default App;
