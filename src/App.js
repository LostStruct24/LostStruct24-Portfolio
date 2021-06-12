import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import ProjectsPage from './pages/projects';
import { Helmet } from 'react-helmet';

function App() {
  <Helmet>
    <title>LostStruct24</title>
  </Helmet> 
  return (
    <Router>
      <Switch>
        <Route path="/LostStruct24-Portfolio" component={Home} exact />
        <Route path="/LostStruct24-Portfolio/projects" component={ProjectsPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
