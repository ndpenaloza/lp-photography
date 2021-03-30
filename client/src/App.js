import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer'
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <main>
      <Router>
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/portfolio' component={Portfolio}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
      </Router>
      </main>
      <footer>
      <Footer/>
      </footer>
    </div>
  );
}

export default App;
