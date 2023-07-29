import React from 'react';

import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import * as fetch from './api/fetch';

import './App.css';

function App() {
  // Refactor: State
  const [selectedBoard, setSelectedBoard] = React.useState(1);
  // Project id, or use routing
  const [selectedProject, setSelectedProject] = React.useState(1);
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    try {
      fetch.get('projects').then(resp => setProjects(resp.data));
    } catch (error) {

    }
  },[]);

  return (
    <div className="app">
      <header>

      </header>
      <div className='main'>
        <Sidebar projects={projects} setSelectedBoard={setSelectedBoard} selectedBoard={selectedBoard} />
        <div className='line-v'></div>
        <Dashboard selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard} />
      </div>
    </div>
  );
}

export default App;
