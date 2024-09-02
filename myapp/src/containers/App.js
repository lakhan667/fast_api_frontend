// App.js
import React from 'react';
import Header from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import UserManagement from './UserManagement';

const App = () => {
  return (
    <div className="container">
      <Header />
      <h3 className="text-center mt-4 mb-4">User Management</h3>
      <UserManagement />
      <FooterComponent />

    </div>
  );
};

export default App;