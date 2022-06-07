import { Fragment } from 'react';
import { Switch, Redirect, Route } from 'wouter';
import { Provider } from 'react-redux'
import store from './store'
import { ToggleContextProvider } from './context/ToggleContext';
import Home from './Pages/Home';
import Login from "./Pages/Login";
// import { Router } from 'wouter';
// import makeCachedMatcher from 'wouter/matcher'
// import { pathToRegexp } from 'path-to-regexp'

// const convertPathToRegexp = (path) => {
//   let keys = [];

//   // we use original pathToRegexp package here with keys
//   const regexp = pathToRegexp(path, keys, { strict: true });
//   return { keys, regexp };
// };

// const customMatcher = makeCachedMatcher(convertPathToRegexp);

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <ToggleContextProvider>
          {/* <Router base='/channels/@' matcher={customMatcher}> */}
          <Switch>
            <Route path='/'>
              <Login />
            </Route>
            <Route path='/channels/@me' component={Home} />
            <Route path='/channels/@me/:id' component={Home} />
            <Route path='/channels/:serverId/:id' component={Home} />
            <Route path='/:rest*'>
              <Redirect to='/channels/@me' />
            </Route>
          </Switch>
          {/* </Router> */}
        </ToggleContextProvider>
      </Provider>
    </Fragment >
  );
}

export default App;
