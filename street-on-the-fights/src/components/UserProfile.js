import React, { useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [playerName, setPlayerName] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Make API request to update user profile
      const response = await axios.put('/api/user/profile', { playerName });
      setSuccessMessage(response.data.message);
    } catch (error) {
      setErrorMessage('Error updating profile. Please try again.');
      console.error('Error updating profile:', error);
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="playerName">Player Name:</label>
          <input
            type="text"
            id="playerName"
            value={playerName}
            onChange={(event) => setPlayerName(event.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          Update Profile
        </button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default UserProfile;
