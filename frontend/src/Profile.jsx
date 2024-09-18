import React, { useState, useEffect } from 'react';
import './UserProfile.css'; // Import the CSS for styling

// Mock API request (replace this with your actual API endpoint)
const API_URL = 'https://localhost:5000/myInfo/66e46fe6072d5f86d8cab1a7/';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch user data from API
    const fetchUserData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div className="loading">Loading user profile...</div>;
  }

  if (!userData) {
    return <div className="error">Failed to load user data</div>;
  }

  return (
    <div className="user-profile">
      <div className="profile-header">
        {/* <img
          src={userData.profilePicture || 'https://via.placeholder.com/150'}
          alt={`${userData.name}'s Profile`}
          className="profile-img"
        /> */}
        <h2>{userData.user_name}</h2>
        {/* <p className="user-bio">{userData.bio || 'No bio available'}</p> */}
      </div>
      
      <div className="profile-details">
      <div className="detail-item">
          <h4>Name:</h4>
          <p>{userData.full_name || 'Unknown'}</p>
        </div>
        <div className="detail-item">
          <h4>Account Balance:</h4>
          <p>{userData.account_balance}</p>
        </div>
        <div className="detail-item">
          <h4>Cash:</h4>
          <p>{userData.cash_amount}</p>
        </div>
      </div>

      <div className="profile-footer">
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default UserProfile;
