import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './Component/Nav';

import Login from './Component/Login';
import SignUp from './Component/SignUp';

import Landing from './Component/Landing'
import { useSelector } from 'react-redux';

import Offer from './Component/Offer';
import Help from './Component/Help';
import SearchBar from './Component/SearchBar';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  // console.log(isLoggedIn);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Offer />} />
        <Route
          path="/login"
          element={ <Login />}
        />
        <Route path='/help' element={<Help/>}/>
        <Route
          path="/signup"
          element={<SignUp />}
        />
        <Route path="/search" element={<SearchBar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
