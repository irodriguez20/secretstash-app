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
      ]
    })
  }

  handleAddRecipe = recipe => {
    this.setState({
      recipes: [
        ...this.state.recipes,
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
    const { recipes, folders } = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => (
              <RecipeListNav
                folders={folders}
                recipes={recipes}
                {...routeProps}
              />
            )}
          // component={RecipeListNav}
          />
        ))}
        <Route

          path='/login'
          component={RecipePageMain}
        />
        <Route
          path='/recipe/:recipeId'
          component={RecipePageNav}
        />
        <Route
          path='/add-folder'
          component={RecipePageNav}
        />
        <Route

          path='/add-recipe'
          component={RecipePageNav}
        />
      </>
    )
  }

  renderMainRoutes() {
    const { recipes, folders } = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => {
              const { folderId } = routeProps.match.params;
              const recipesForFolder = getRecipesForFolder(
                recipes,
                folderId
              );
              return (
                <RecipeListMain
                  {...routeProps}
                  recipes={recipesForFolder}
                />
              )
            }}
          // component={RecipeListMain}
          />
        ))}
        <Route
          path='/recipe/:recipeId'
          render={routeProps => {
            const { recipeId } = routeProps.match.params;
            const recipe = findRecipe(recipes, recipeId) || {};
            const folder = findFolder(folders, recipe.folderId);
            return <RecipePageNav {...routeProps} folder={folder} />
          }}
        // component={RecipePageMain}
        />
        <Route
          path='/add-folder'
          component={AddFolder}
        />
        <Route
          path='/add-recipe'
          component={AddRecipeForm}
        />
      </>
    )
  }


  render() {
    const value = {
      folders: this.state.folders,
      recipes: this.state.recipes,
      addFolder: this.handleAddFolder,
      addNote: this.handleAddRecipe,
      deleteNote: this.handleDeleteRecipe,
    }
    return (
      <Context.Provider value={value}>
        <div className="App">
          <nav className='App__nav'>
            {this.renderNavRoutes()}
          </nav>
          <header className='App__header'>
            <h1>
              <Link to='/'>Secret Stash</Link>
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
