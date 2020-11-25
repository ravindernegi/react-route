import React from 'react';
import {BrowserRouter as Router,Switch,Route, Link, Redirect} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NoFound from './404';
const App = (props) => {
  return (
    <div className="container" >
      <h1 >React Route</h1>
        <Router>
        <p align="center">
        <Link to="/">Home</Link>
        | <Link to="/about">About</Link> |
         <Link to="/contact">Contact</Link></p>

        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>

            <Route exact path="/about/:id">
              <About/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
            <Route exact path="/contact/:title">
              <Contact/>
            </Route>
            {/*<Route path="*">
              <NoFound/>
            </Route>
  */}
            <Redirect to="/"/>
        </Switch>
      </Router>

    </div >
  )
}

export default App;
