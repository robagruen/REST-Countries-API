import './css/index.css';

import Header from '../Header/index.js';
import CountryListing from '../CountryListing/index.js';
import Country from '../Country/index.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <CountryListing />
        </Route>
        <Route path="/country" exact>
          <Country />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
