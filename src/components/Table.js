import React from 'react';


const Table = ({ data }) => {
    return (
        <table className="data-table">
            <thead>
                <tr>
                    {data.labels.map((label, index) => (
                        <th key={index}>{label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {data.datasets[0].data.map((value, index) => (
                        <td key={index}>{value}</td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
