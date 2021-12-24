import {createContext, useState} from "react";
import './App.css';
import Pop from "./component/Pop";
import {Link, Route, Switch} from "react-router-dom";
import Header from "./component/Header/Header";
import SignIn from "./component/Pages/SignIn";



export const AppContext = createContext(null)

function App() {

    const [input, setInput] = useState('')
    const [keyword, setKeyword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        setKeyword(input)
    }

    return (
        <AppContext.Provider value={{keyword}}>
            <div className="App">
                <header className="App-header">
                    <div className="header-content">
                        <Link to={"/"} className="header__logo">Movie Theater</Link>
                    </div>
                    <Header/>
                    <SignIn/>


                    <form onSubmit={handleSubmit}>
                        <input type="text"
                               className="header__search"
                               placeholder="Поиск"
                               value={input}
                               onChange={event => setInput(event.target.value)}
                        />

                    </form>
                </header>

                <div className="container">
                    <div className="movies">
                        <Pop/>
                    </div>
                </div>
            </div>
        </AppContext.Provider>
    );
}


export default App;
