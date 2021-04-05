import './App.css';
import Landing from './pages/landing';
import Profile from './pages/profile';
import Workout from './pages/workout';
import Record from './pages/record';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExercisePage from './pages/exercise';
import Feedback from './pages/feedback';

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

          <Route exact path='/exercise'>
            <ExercisePage/>
          </Route>
          <Route exact path='/record'>
            <Record/>
          </Route>
          <Route exact path='/feedback'>
            <Feedback/>
          </Route>          
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
