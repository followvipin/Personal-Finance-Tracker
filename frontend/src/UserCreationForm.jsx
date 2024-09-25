import React, { useState } from 'react';
import './UserCreationForm.css'

const UserCreationForm = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        user_name: '',
        account_balance: '',
        cash_amount: '',
        email: '',
        password: '',
        phoneNumber: ''
    });
    const [responseMessage, setResponseMessage] = useState('');


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                setResponseMessage(`User created successfully: ${data.full_name}`);
            } else {
                setResponseMessage(data.message);
            }
        } catch (error) {
            setResponseMessage('Server error, please try again later.');
        }
    };

    return (
        <div>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="full_name">Full Name:</label>
                    <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="user_name">User Name:</label>
                    <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="account_balance">Account Balance:</label>
                    <input
                        type="number"
                        id="account_balance"
                        name="account_balance"
                        value={formData.account_balance}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="cash_amount">Cash Amount:</label>
                    <input
                        type="number"
                        id="cash_amount"
                        name="cash_amount"
                        value={formData.cash_amount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Create User</button>
            </form>

            {/* Display response message */}
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default UserCreationForm;
