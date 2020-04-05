import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppSidebar from './components/sidebar';
import AppHeader from './components/header';
import HomeIndexPage from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Router>
          <AppSidebar></AppSidebar>
          <div className="page">
            <AppHeader></AppHeader>
            <Route exact path="/" component={HomeIndexPage} />
          </div>
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
