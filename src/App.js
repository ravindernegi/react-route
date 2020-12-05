import React from 'react';
import {BrowserRouter as Router,Switch,Route, Link,NavLink} from 'react-router-dom';
import routes from './routes';
const App = (props) => {
  return (
    <div className="container" >
      <h1 >React Route</h1>
        <Router>
        <p align="center">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        | <NavLink exact to="/about" activeStyle={{
           color:'red',
           fontWeight:'bold'
         }}>About</NavLink> |
         <NavLink exact to="/contact" activeStyle={{
           color:'red',
           fontWeight:'bold'
         }}>Contact</NavLink>

         | <Link to="/test">Test</Link>

         | <NavLink exact to="/faq" activeStyle={{
           color:'red',
           fontWeight:'bold'
         }}>FAQ</NavLink>

        </p>

        <Switch>
          {
            routes.map((route,index)=>(<Route key={index} exact={route.exact} path={route.path} render={()=>(<route.component/>)}/>))
          }
        </Switch>

      </Router>
           <style>
             {
               `
               .active{color:#ff0;font-weight:bold;}

               `
             }
           </style>
    </div >
  )
}

export default App;
