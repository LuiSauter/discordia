import { Route } from 'wouter'
import Login from "./Pages/Login";

function App() {
  return (
    <div className="">
      <Route path='/'>
        <Login />
      </Route>
      <Route path='/channels'>
        {/* <Home /> */}
      </Route>
      <Route path='/channels/:id'>
        {/* <Home /> */}
      </Route>
    </div>
  );
}

export default App;
