
import './App.css';
import Landing from './pages/landing';
import Profile from './pages/profile';
import Workout from './pages/workout';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExercisePage from './pages/exercise';

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
        <Route exact path='/exercise'>
            <ExercisePage/>
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
