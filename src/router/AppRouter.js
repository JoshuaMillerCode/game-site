import React from 'react';
import '../App.css';
import RawgHome from '../pages/RawgHome'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import RawgInfo from '../pages/RawgInfo';
import LastFmHome from '../pages/LastFmHome';
import LastFmInfo from '../pages/LastFmInfo'

function AppRouter() {
  return (
    <Router>
      <RawgHome/>
    </Router>
  );
}

export default AppRouter;
