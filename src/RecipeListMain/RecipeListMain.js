import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Recipe from '../Recipe/Recipe'
import CircleButton from '../CircleButton/CircleButton'
import Context from '../Context'
import { getRecipesForFolder } from '../recipes-helpers'
import './RecipeListMain.css'

class RecipeListMain extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = Context;

    render() {
        const { folderId } = this.props.match.params
        const { recipes = [] } = this.context

        const recipesForFolder = getRecipesForFolder(recipes, folderId)

        return (
            <div className='RecipeListMain'>
                <ul className='RecipeListMain__recipe-list'>
                    {recipesForFolder.map(recipe =>

                        <li key={recipe.id}>
                            <Recipe
                                id={recipe.id}
                                name={recipe.name}
                                timetomake={recipe.timetomake}
                                description={recipe.description}
                                history={this.props.history}
                            />
                            <Link className='RecipeListMain__edit-recipe-link' to={`/edit/${recipe.id}`}></Link>
                        </li>

                    )}
                </ul>
                <div className='RecipeListMain__button-container'>
                    <CircleButton
                        tag={Link}
                        to='/add-recipe'
                        type='button'
                        className='RecipeListMain__add-recipe-button'
                    >
                        <FontAwesomeIcon icon='plus' />
                        <br />
                        Recipe
                    </CircleButton>
                </div>
            </div >
        );
    }
}

export default RecipeListMain;