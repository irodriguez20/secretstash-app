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


    render() {
        const { recipes = [] } = this.context
        const { recipeId } = this.props.match.params

        const recipe = findRecipe(recipes, recipeId) || { content: '' }

        return (
            <section className='RecipePageMain'>
                <Recipe
                    id={recipe.id}
                    name={recipe.name}
                    timetomake={recipe.timetomake}
                    ingredients={recipe.ingredients}
                    description={recipe.description}
                    steps={recipe.steps}
                    history={this.props.history}

                />
                <section>
                    <div className='RecipePageMain__ingredients'>
                        <ul><li>{recipe.ingredients}</li></ul>
                    </div>
                </section>
                <section>
                    <div className='RecipePageMain__steps'>
                        <blockquote>{recipe.steps}</blockquote>
                    </div>
                </section>
            </section>
        );
    }
}

export default RecipePageMain;