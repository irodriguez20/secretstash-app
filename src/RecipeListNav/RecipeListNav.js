import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Context from '../Context'
import { countRecipesForFolder } from '../recipes-helpers'
import './RecipeListNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircleButton from '../CircleButton/CircleButton'

class RecipeListNav extends Component {
    static contextType = Context;

    render() {
        const { folders = [], recipes = [] } = this.context
        return (
            <div className="RecipeListNav">
                <ul className="RecipeListNav__list">
                    {folders.map(folder =>
                        <li key={folder.id}>
                            <NavLink
                                className="RecipeListNav__folder-link"
                                to={`/folder/${folder.id}`}
                            >
                                <span className="RecipeListNav__num-recipes">
                                    {countRecipesForFolder(recipes, folder.id)}
                                </span>
                                {folder.foldername}
                            </NavLink>
                        </li>
                    )}
                </ul>
                <div className="RecipeListNav__button-wrapper">
                    <CircleButton
                        tag={Link}
                        to='/add-folder'
                        type='button'
                        className='RecipeListNav__add-folder-button'
                    >
                        <FontAwesomeIcon icon='plus' />
                        <br />
                        Folder
                    </CircleButton>
                </div>
            </div>
        );
    }
}

export default RecipeListNav;