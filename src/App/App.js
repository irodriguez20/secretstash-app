import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import AddRecipeForm from '../AddRecipeForm/AddRecipeForm';
// import LoginForm from '../LoginForm/LoginForm';
import STORE from '../STORE';
import './App.css';
import Context from '../Context';
import LandingPage from '../LandingPage/LandingPage';
import RecipePageNav from '../RecipePageNav/RecipePageNav';
import RecipeListNav from '../RecipeListNav/RecipeListNav';
import RecipeListMain from '../RecipeListMain/RecipeListMain'
import AddFolder from '../AddFolder/AddFolder';
import AddRecipeForm from '../AddRecipeForm/AddRecipeForm';
import RecipePageMain from '../RecipePageMain/RecipePageMain'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getRecipesForFolder, findRecipe, findFolder } from '../recipes-helpers';
import EditRecipe from '../EditRecipe/EditRecipe';


class App extends Component {
  state = {
    recipes: [],
    folders: [],
  };

  componentDidMount() {
    setTimeout(() => this.setState(STORE), 600)
  }

  handleAddFolder = folder => {
    this.setState({
      folders: [
        ...this.state.folders,
        folder
      ]
    })
  }

  handleAddRecipe = recipe => {
    this.setState({
      recipes: [
        ...this.state.recipes,
        recipe
      ]
    })
  }

  handleDeleteRecipe = recipeId => {
    const newRecipes = this.state.recipes.filter(recipe => recipe.id !== recipeId)
    this.setState({
      recipes: newRecipes
    })
  }

  renderNavRoutes() {
    return (
      <>
        {['/', '/folder/:folderId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            component={RecipeListNav}
          />
        )}
        <Route
          path='/login'
          component={RecipePageMain}
        />
        <Route
          path='/logout'
          component={LandingPage}
        />
        <Route
          path='/recipe/:recipeId'
          component={RecipePageNav}
        />
        <Route
          path='/add-folder'
          component={RecipePageNav}
        />
        {/* <Route

          path='/home'
          component={App}
        /> */}
        <Route

          path='/add-recipe'
          component={RecipePageNav}
        />
      </>
    )
  }

  renderMainRoutes() {
    return (
      <>
        {['/', '/folder/:folderId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            component={RecipeListMain}
          />
        )}
        {/* <Route

          path='/home'
          component={App}
        /> */}
        <Route
          exact
          path='/home'
          component={LandingPage}
        />
        <Route
          path='/recipe/:recipeId'
          component={RecipePageMain}
        />
        <Route
          path='/add-folder'
          component={AddFolder}
        />
        <Route
          path='/add-recipe'
          component={AddRecipeForm}
        />
        <Route
          path='/edit/:recipeId'
          component={EditRecipe}
        />
      </>
    )
  }


  render() {
    const value = {
      folders: this.state.folders,
      recipes: this.state.recipes,
      addFolder: this.handleAddFolder,
      addRecipe: this.handleAddRecipe,
      deleteRecipe: this.handleDeleteRecipe,
      updateRecipe: this.updateRecipe,
    }
    return (
      <Context.Provider value={value}>
        <div className="App">
          <nav className='App__nav'>
            {this.renderNavRoutes()}
          </nav>
          <header className='App__header'>
            <h1>
              <Link to='/home'>Secret Stash</Link>
              {' '}
              <FontAwesomeIcon icon='book' />
            </h1>
          </header>
          <main className='App__main'>
            {this.renderMainRoutes()}
          </main>
          <footer className="content-info">Footer</footer>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
