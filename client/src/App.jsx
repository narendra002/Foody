import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './Component/Nav';

import Login from './Component/Login';
import SignUp from './Component/SignUp';

import Landing from './Component/Landing'
import { useSelector } from 'react-redux';
import HeroSectionSlider from './Component/HeroSectionSlider';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  // console.log(isLoggedIn);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HeroSectionSlider />} />
        <Route
          path="/login"
          element={ <Login />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
      </Routes>
    </Router>
  );
}

export default App;
