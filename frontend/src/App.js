import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './views/Home'
import Creator from './views/Creator'
import Books from './views/Books'
function App() {
  return (
    <Router>
      <Navigation/>

      <div className="container p-4">
        <Route path='/' exact component={Home}/>
        <Route path='/creator' component={Creator}/>
        <Route path='/books' component={Books}/>
      </div>

    </Router>
  );
}

export default App;
