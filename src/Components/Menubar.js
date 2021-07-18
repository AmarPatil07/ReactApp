import './CSS/CompStyle.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

import Body from './Body';
import Reports from '../View/Reports';
import Dashbaord from  '../View/Dashboard'
import NotFound from '../View/NotFound';
const add = () => {

}

function Menubar(){
return (
  <div>
  <Router>
  <div className="menubar">
  <NavLink exact onClick={ e=> console.log("hey amar...")} to="/" activeClassName="active-menu">Home</NavLink>
  <NavLink to="/dashboard" activeClassName="active-menu" onClick={add}>Dashbaord</NavLink>
  <NavLink to="/report" activeClassName="active-menu">Reports</NavLink>
  </div>
  <div>
  <Switch>
     <Route exact path='/'>
        <Body/>
      </Route>
      <Route path='/dashboard'>
      <Dashbaord/>
      </Route>
      <Route path='/report'>
      <Reports/>
      </Route>
      <Route path='*'>
      <NotFound/>
      </Route>
</Switch>
  </div>
  </Router>
  </div>
)
}

export default Menubar;