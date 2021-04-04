import React from 'react';
import '../App.css';
import Home from '../pages/Home'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Info from '../pages/Info';

function AppRouter() {
  return (
    <Router>
      <Info/>
    </Router>
  );
}

export default AppRouter;
