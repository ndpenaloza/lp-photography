import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Index from '../src/pages/Index';
import Home from '../src/pages/Home';
import Portfolio from '../src/pages/Portfolio';
import Contact from '../src/pages/Contact';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/portfolio' component={Portfolio}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
