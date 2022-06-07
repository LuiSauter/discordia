import { Fragment } from 'react';
import { Switch, Redirect, Route } from 'wouter';
import { Provider } from 'react-redux'
import store from './store'
import { ToggleContextProvider } from './context/ToggleContext';
import Home from './Pages/Home';
import Login from "./Pages/Login";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <ToggleContextProvider>
          <Switch>
            <Route path='/' component={Login} />
            <Route path='/channels/@me' component={Home} />
            <Route path='/channels/@me/:id' component={Home} />
            <Route path='/channels/:serverId/:id' component={Home} />
            <Route path='/:rest*'>
              <Redirect to='/channels/@me' />
            </Route>
          </Switch>
        </ToggleContextProvider>
      </Provider>
    </Fragment >
  );
}

export default App;
