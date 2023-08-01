import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AppDash from './App';
import Login from './components/Login';

function PrivateRoute({ children }) {
  const currentUser = localStorage.getItem('email');

  if (!currentUser) {
    return <Navigate to='/login' />;
  }

  return children;
}

const RouteComp = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="*" element={<PrivateRoute><AppDash /></PrivateRoute>} />
        {/* <PrivateRoute exact path="*" component={AppDash} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default RouteComp;
