import React from 'react';
import '../App.css';
import Home from '../pages/Home'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function AppRouter() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default AppRouter;
