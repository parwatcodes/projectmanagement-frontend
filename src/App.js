import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import * as fetch from './api/fetch';

import './App.css';

function App() {
  // Refactor: State
  const [selectedBoard, setSelectedBoard] = React.useState('home');
  // Project id, or use routing
  const [selectedProject, setSelectedProject] = React.useState();
  const [projects, setProjects] = React.useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    try {
      fetch.get('/projects').then(resp => {
        setProjects(resp.data);
        setSelectedProject(resp.data[0]);
      });
    } catch (error) {

    }
  }, []);

  React.useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, []);

  return (
    <div className="app">
      <header>

      </header>
      <div className='main'>
        <Sidebar
          projects={projects}
          selectedBoard={selectedBoard}
          setSelectedBoard={setSelectedBoard}
        />
        <div className='line-v'></div>
        <Dashboard
          selectedBoard={selectedBoard}
          selectedProject={selectedProject}
          setSelectedBoard={setSelectedBoard}
        />
      </div>
    </div>
  );
}

export default App;
