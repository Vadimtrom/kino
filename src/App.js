import './App.css';
import Pop from "./component/Pop";
import {Link, Route, Switch} from "react-router-dom";
import Registration from "./component/Registration";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="header-content">
                    <Link to={"/"} className="header__logo">Movie Theater</Link>
                </div>

                <Switch>
                    <Route exact path='/login' component={Registration}/>
                </Switch>

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
