import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import UserData from './pages/UserData';
import UserPanel from './pages/UserPanel';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page1" component={UserData} />
          <Route path="/page2" component={UserPanel} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
