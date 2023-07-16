import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Set your backend API base URL
});

// Example API methods
export const fetchLeaderboard = () => {
  return api.get('/leaderboard');
};

export const updateUserProfile = (playerName) => {
  return api.put('/user/profile', { playerName });
};

// You can add more API methods as needed

export default api;
