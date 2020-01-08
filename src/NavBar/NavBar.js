import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import AddRecipeForm from '../AddRecipeForm/AddRecipeForm';
// import LoginForm from '../LoginForm/LoginForm';
import './NavBar.css'


class NavBar extends Component {


    renderLogoutLink() {
        return (
            <div className='Header__Logged-in'>
                <Link
                    to='/'>
                    Logout
                </Link>
            </div>
        )
    }

    renderLogInLink() {
        return (
            <div className='Header__not-logged-in'>
                <Link
                    to='/login'>
                    Log In
            </Link>
            </div>
        )
    }

    renderAddRecipeLink() {
        return (
            <div>
                <Link
                    to='/add-recipe'>
                    Add Recipe
               </Link>
            </div>
        )

    }

    render() {
        return <>
            <nav className='Header'>
                <h1>
                    <Link to='/'>
                    </Link>
                </h1>
                {this.renderLogInLink()}
                {this.renderLogoutLink()}
                {this.renderAddRecipeLink()}
            </nav>
        </>
    }
}

export default NavBar;