import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppDash from './App';
import Login from './components/Login';

const RouteComp = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="*" element={<AppDash />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default RouteComp;
