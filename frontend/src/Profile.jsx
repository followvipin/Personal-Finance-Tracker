import React, { useState, useEffect } from 'react';
import './Profile.css'; // Import the CSS for styling

const API_URL = 'http://localhost:5000/myInfo/66e46fe6072d5f86d8cab1a7/';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to load user data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div className="loading">Loading user profile...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="user-profile">
      <div className="profile-header">
        <h2>{userData.user_name || 'Unknown User'}</h2>
      </div>
      
      <div className="profile-details">
        <div className="detail-item">
          <h4>Name:</h4>
          <p>{userData.full_name || 'Unknown'}</p>
        </div>
        <div className="detail-item">
          <h4>Account Balance:</h4>
          <p>{userData.account_balance || 'N/A'}</p>
        </div>
        <div className="detail-item">
          <h4>Cash:</h4>
          <p>{userData.cash_amount || 'N/A'}</p>
        </div>
      </div>

      <div className="profile-footer">
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default UserProfile;
