import React, { useEffect } from 'react';
import { getUser, logout, isLoggedIn } from '../AuthService/AuthService';

const Dashboard = () => {
  useEffect(() => {
    if (!isLoggedIn()) {
      window.location.href = '/login';
    }
  }, []);

  const user = getUser();

  return (
    <div className="dashboard">
      <h2>Welcome, {user?.username}</h2>
      <button onClick={logout}>Logout</button>
      {/* Additional dashboard content goes here */}
    </div>
  );
};

export default Dashboard;
