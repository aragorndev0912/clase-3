import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Details from './pages/Details/Details';

const App = () => {
  return (
    <Router>
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/details/:id?" exact>
            <LoadDetails />
          </Route>
        </Switch>
    </Router>
  );
}

function LoadDetails() {
  const { id } = useParams();
  return (
    <Details id={id}/>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)