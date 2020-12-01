import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from "./components/navbar.component";
import Login from "./components/login";
import ExercisesList from './components/exercises-list.component';
import UpdateCase from "./components/edit-exercises.component";
import CreateUser from "./components/create-user.component";
import CreateCase from './components/createCase';

function App() {
  return (
    <Router>
      <div className="navbar-container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Login} />
      <Route path="/caseList" exact component={ExercisesList} />
      <Route path="/update/:id" component={UpdateCase} />
      <Route path="/create" component={CreateCase} />
      <Route path="/RegisterUser" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
