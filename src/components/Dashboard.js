import React, { useEffect, useState } from 'react';
import Chart from './Chart';
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="dashboard">
            <h1>Data Analytics Dashboard</h1>
            {data ? <Chart data={data} /> : <p>Loading...</p>}
        </div>
    );
};

export default Dashboard;
