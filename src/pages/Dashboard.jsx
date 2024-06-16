/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  //styling
  const containerStyle = {
    display: 'flex',
  };

  const sidebarStyle = {
    width: '250px', // Fixed width for the sidebar
    minWidth: '250px',
    backgroundColor: '#f8f9fa', // Light background color for the sidebar
  };

  const mainContentStyle = {
    flexGrow: 1, // Takes the remaining width
    padding: '1rem',
    fontFamily: 'Times New Roman, Times, serif',
    
  };

  return (
    <>
      <Header />
      <div style={containerStyle}>
        <div style={sidebarStyle}>
          <Sidebar />
        </div>
        <main role="main" style={mainContentStyle}>
          <h2>Dashboard</h2>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
