import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderManagement = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/admin/orders');
                setOrders(response.data);
            } catch (err) {
                setError('Failed to load orders');
            }
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <h1>Order Management</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <table border="1" style={{ width: '100%', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>Store Name</th>
                        <th>Aggregator</th>
                        <th>Net Amount</th>
                        <th>Gross Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order._id}>
                            <td>{order.storeId.name}</td>
                            <td>{order.aggregator}</td>
                            <td>{order.netAmount}</td>
                            <td>{order.grossAmount}</td>
                            <td>{order.status}</td>
                            <td>{new Date(order.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderManagement;
