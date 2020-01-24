import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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
import config from '../config'
import EditRecipe from '../EditRecipe/EditRecipe';
import Logo from '../Logo.png'


class App extends Component {
  state = {
    recipes: [],
    folders: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/recipes`),
      fetch(`${config.API_ENDPOINT}/folders`)
    ])
      .then(([recipesRes, foldersRes]) => {
        if (!recipesRes.ok)
          return recipesRes.json().then(e => Promise.reject(e))
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e))

        return Promise.all([
          recipesRes.json(),
          foldersRes.json(),
        ])
      })
      .then(([recipes, folders]) => {
        this.setState({ recipes, folders })
      })
      .catch(error => {
        console.error({ error })
      })
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

  updateRecipe = updatedRecipe => {
    this.setState({
      recipes: this.state.recipes.map(recipe =>
        (recipe.id !== updatedRecipe.id)
          ? recipe
          : updatedRecipe
      )
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
            <Link to='/home'><img className='Logo' src={Logo} alt="Logo" /></Link>
            {' '}
            {/* <FontAwesomeIcon icon='book' /> */}
            {this.renderNavRoutes()}
          </nav>
          <header className="App__header">
            <h1>
              <Link className="App__header_link" to='/'>
                Your Recipes
            </Link>
            </h1>
          </header>
          <main className='App__main'>
            {this.renderMainRoutes()}
          </main>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
