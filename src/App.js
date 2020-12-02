import React from 'react';
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
import routes from './routes';
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
          {
            routes.map((route,index)=>(<Route key={index} exact={route.exact} path={route.path} render={()=>(<route.component/>)}/>))
          }
        </Switch>
      </Router>

    </div >
  )
}

export default App;
