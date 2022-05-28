import { Fragment } from 'react';
import { Switch } from 'wouter';
import { Route } from 'wouter'
import { ToggleContextProvider } from './context/ToggleContext';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Login from "./Pages/Login";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path='/'>
          <Login />
        </Route>
        <ToggleContextProvider>
          <Route path='/channels/@me'>
            <Home />
          </Route>
          <Route path='/channels/@me/:id'>
            <Home />
          </Route>
          <Route path='/channels/:serverId/:id'>
            <Home />
          </Route>
        </ToggleContextProvider>
        <Route path='/:rest*'>
          <Error />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
