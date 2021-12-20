import './App.css';
import Pop from "./component/Pop";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./component/Search";
import Register from "./component/login";
import Registration from "./component/Registration";




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <a href="./" className="header__logo">Movie Theater</a>
        </div>
          <Router>
              <Switch>
                  <Route exact path='/login' component={Registration}/>
              </Switch>
          </Router>

          <form>
              <input type="text" className="header__search" placeholder="Поиск"/>
              {/*<Search/>*/}
          </form>
     </header>

      <div className="container">
        <div className="movies">
            <Pop/>
        </div>
      </div>
    </div>
  );
}


export default App;
