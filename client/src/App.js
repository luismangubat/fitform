
import './App.css';
import Landing from './pages/landing';
import Profile from './pages/profile';
import Workout from './pages/workout';
import { BrowserRouter, Route, Switch } from "react-router-dom";




function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path ='/'>
            <Landing/>
          </Route>
          <Route exact path='/profile'>
            <Profile/>
          </Route>
          <Route exact path='/workout'>
            <Workout/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
