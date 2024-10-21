import React from 'react';
import DashboardLayout from './layouts/DashboardLayout';
import Dasboard from './pages/Dasboard';

const App = () => {
  return (
    <DashboardLayout>
      <Dasboard />
    </DashboardLayout>
  );
};

export default App;