import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
// import LoginForm from './LoginForm/LoginForm';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faPlus, faChevronLeft, faTrashAlt, faBook
} from '@fortawesome/free-solid-svg-icons'
// import UserMainScreen from './UserMainScreen/UserMainScreen';
// import AddRecipeForm from './AddRecipeForm/AddRecipeForm';
import { BrowserRouter } from 'react-router-dom'
// import LandingPage from './LandingPage/LandingPage';
// import AddFolder from './AddFolder/AddFolder';

library.add(faPlus, faChevronLeft, faTrashAlt, faBook)

// const routing = (
//     <Router>
//         <div>
//             <nav>
//                 <ul>
//                     <li>
//                         <NavLink exact activeClassName="active" to="/">
//                             <h1>Secret Stash</h1>
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink exact activeClassName="active" to="/login">
//                             Login
//                     </NavLink>
//                     </li>
//                     <li>
//                         <NavLink exact activeClassName="active" to="/add-recipe">
//                             Add Recipe
//                     </NavLink>
//                     </li>
//                     <li>
//                         <NavLink exact activeClassName="active" to="/add-folder">
//                             Add Folder
//                     </NavLink>
//                     </li>
//                     <li>
//                         <NavLink exact activeClassName="active" to="/logout">
//                             Logout
//                     </NavLink>
//                     </li>
//                 </ul>
//             </nav>
//             <hr />
//             <Switch>
//                 <Route exact path="/" component={LandingPage} />
//                 <Route exact path="/login" component={UserMainScreen} />
//                 <Route exact path="/add-recipe" component={AddRecipeForm} />
//                 <Route exact path="/add-folder" component={AddFolder} />
//                 <Route exact path="/logout" component={LandingPage} />
//             </Switch>
//         </div>

//     </Router>
// )

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root')
);

