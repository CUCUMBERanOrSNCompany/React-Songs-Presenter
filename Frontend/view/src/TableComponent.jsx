// TableComponent.jsx
import React from 'react';

const TableComponent = ({ data }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Column Header 1</th>
                <th>Column Header 2</th>
                {/* Add more headers as needed */}
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.column1}</td>
                    <td>{item.column2}</td>
                    {/* Add more cells for other columns */}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default TableComponent;
