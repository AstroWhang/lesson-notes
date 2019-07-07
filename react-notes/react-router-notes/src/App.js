import React from 'react';
import Shop from './components/Shop';
import About from './components/About';
import Nav from './components/Nav';
import ItemDetail from './components/ItemDetail';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* Switch is what allows us to use exact in order to avoid having home render on both about and shop page, normally route checks for first match */}
        <Switch>
          <Home path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;

function Home() {
  return(
    <div>
      <h3>Home Page</h3>
    </div>
  )
}