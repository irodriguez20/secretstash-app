import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
// import LoginForm from './LoginForm/LoginForm';
import UserMainScreen from './UserMainScreen/UserMainScreen';
import AddRecipeForm from './AddRecipeForm/AddRecipeForm';
import { Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom'

const routing = (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" to="/">
                            <h1>Secret Stash</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/login">
                            Login
                    </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/add-recipe">
                            Add Recipe
                    </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/logout">
                            Logout
                    </NavLink>
                    </li>
                </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={UserMainScreen} />
                <Route exact path="/add-recipe" component={AddRecipeForm} />
                <Route exact path="/logout" component={App} />
            </Switch>
        </div>

    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

