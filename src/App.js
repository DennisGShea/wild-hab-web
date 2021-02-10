
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import WildHabEventForm from "./CreateEventForm/WildHabEventForm"
import ListEvents from "./ListEvents"


function App() {
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-event">About</Link>
            </li>
            <li>
              <Link to="/list-events">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/create-event">
            <WildHabEventForm />
          </Route>
          <Route exact path="/list-events">
            <ListEvents/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App