import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Context from '../Context'
import CircleButton from '../CircleButton/CircleButton'
import { findRecipe, findFolder } from '../recipes-helpers'
import './RecipePageNav.css'

class RecipePageNav extends Component {
    static defaultProps = {
        history: {
            goBack: () => { }
        },
        match: {
            params: {}
        }
    }

    static contextType = Context;

    render() {
        const { recipes, folders } = this.context
        const { recipeId } = this.props.match.params
        const recipe = findRecipe(recipes, recipeId) || {}
        const folder = findFolder(folders, recipe.folderid)
        return (
            <div className='RecipePageNav'>
                <CircleButton
                    tag='button'
                    role='link'
                    onClick={() => this.props.history.goBack()}
                    className='RecipePageNav__back-button'
                >
                    <FontAwesomeIcon icon='chevron-left' />
                    <br />
                    Back
                </CircleButton>
                {folder && (
                    <h3 className='RecipePageNav__folder-name'>
                        {folder.foldername}
                    </h3>
                )}
            </div>
        )
    }
}

export default RecipePageNav;