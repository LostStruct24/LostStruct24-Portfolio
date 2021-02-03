import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.module.css';
import { Navbar, About, Skills, Projects, Contact, Footer } from './components';
 
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Helmet>
            <title>LostStruct24 | Portfolio</title>
          </Helmet> 
          <Navbar />
            <Route exact path='/LostStruct24Portfolio ' component={About} />
            <Route exact path='/Skills' component={Skills} />
            <Route exact path='/Projects' component={Projects} />
            <Route exact path='/Contact' component={Contact} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;