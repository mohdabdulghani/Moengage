import './App.css';
import SearchPage from './components/SearchPage';
import AnimePage from './components/AnimePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Switch, Route} from "react-router-dom";


function App() {
  return (
    <>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/searchPage" component={SearchPage} />
          <Route exact path="/animePage/:id" component={AnimePage} />
          <Route exact path="/signUp" component={SignUp} />
        </Switch>
    </>
  );
}

export default App;
