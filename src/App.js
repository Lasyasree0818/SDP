import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Pages/Services';
import Products from './components/Pages/Projects';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Services' component={Services} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;