import React from 'react';

import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {

  const [selectedBoard, setSelectedBoard] = React.useState(1);
  // Project id, or use routing
  const [selectedProject, setSelectedProject] = React.useState(1);

  return (
    <div className="app">
      <header>

      </header>
      <div className='main'>
        <Sidebar setSelectedBoard={setSelectedBoard} selectedBoard={selectedBoard} />
        <div className='line-v'></div>
        <Dashboard selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard} />
      </div>
    </div>
  );
}

export default App;
