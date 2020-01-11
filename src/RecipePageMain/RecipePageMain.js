import React, { Component } from 'react';
import Recipe from '../Recipe/Recipe'
import Context from '../Context'
import { findRecipe } from '../recipes-helpers'
import './RecipePageMain.css'

class RecipePageMain extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = Context;

    handleDeleteRecipe = recipeId => {
        this.props.history.push('/')
    }

    render() {
        const { recipes = [] } = this.context
        const { recipeId } = this.props.match.params

        const recipe = findRecipe(recipes, recipeId) || { content: '' }

        return (
            <section className='RecipePageMain'>
                <Recipe
                    id={recipe.id}
                    name={recipe.name}
                    time={recipe.time}
                    ingredients={recipe.ingredients}
                    content={recipe.description}
                    steps={recipe.steps}
                />
                <section>
                    <div className='RecipePageMain__content'>
                        {recipe.content.split(/\n \r|\n/).map((para, i) =>
                            <p key={i}>{para}</p>
                        )}
                    </div>
                </section>
                <section>
                    <div className='RecipePageMain__ingredients'>
                        {recipe.ingredients.split(/\n \r|\n/).map((para, i) =>
                            <p key={i}>{para}</p>
                        )}
                    </div>
                </section>
                <section>
                    <div className='RecipePageMain__steps'>
                        {recipe.steps.split(/\n \r|\n/).map((para, i) =>
                            <p key={i}>{para}</p>
                        )}
                    </div>
                </section>
            </section>
        );
    }
}

export default RecipePageMain;