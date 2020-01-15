import React, { Component } from 'react';
import Context from '../Context'
import SecretStashForm from '../SecretStashForm/SecretStashForm'
import './AddRecipeForm.css';
import PropTypes from 'prop-types'

class AddRecipeForm extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: () => { }
        }).isRequired,
    };

    static contextType = Context;

    handleSubmit = e => {
        e.preventDefault();

        const { name, folderid, time, description, ingredients, steps } = e.target;
        const recipe = {
            id: 4,
            name: name.value,
            folderid: folderid.value,
            time: time.value,
            description: description.value,
            ingredients: ingredients.value,
            steps: steps.value,
        }
        console.log(recipe)

        //    const recipe = {
        //         name.value = "";
        //         time.value = "";
        //         folderid.value = "";
        //         description.value = "";
        //         ingredients.value = "";
        //         steps.value = "";
        //     }
        this.context.addRecipe(recipe)
        this.props.history.push('/');



    }

    render() {
        const { folders = [] } = this.context;
        return (
            <section className="AddRecipe">
                <header className="AddRecipe">
                    <h1>Add a New Memory</h1>
                </header>
                <SecretStashForm onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label htmlFor="recipe-name-input">
                            Recipe Name
                            {' '}
                        </label>
                        <input
                            type="text"
                            name='name'
                            id='name'
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="recipe-time-input">
                            Estimated Time
                            {' '}
                        </label>
                        <input
                            type='text'
                            name='time'
                            id='time'
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor='recipe-folder-select'>
                            Folder
                            {' '}
                        </label>
                        <select id="folderid" name="folderid" required>
                            <option value={null}>...</option>
                            {folders.map(folder => (
                                <option key={folder.id} value={folder.id} name="folderid">
                                    {folder.foldername}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="recipe-description-textarea">
                            Description
                            {' '}
                        </label>
                        <textarea
                            name='description'
                            id='description'
                            required
                        ></textarea>
                    </div>
                    <div className="field">
                        <label htmlFor="recipe-ingredients-textarea">
                            Ingredients
                            {' '}
                        </label>
                        <textarea
                            rows='7'
                            name='ingredients'
                            id='ingredients'
                            required
                        ></textarea>
                    </div>
                    <div className="field">
                        <label htmlFor="steps">
                            Steps
                            {' '}
                        </label>
                        <textarea
                            rows='15'
                            name='steps'
                            id='steps'
                            required></textarea>
                    </div>
                    <div className='buttons'>
                        <button type='submit'>Add</button>
                    </div>
                </SecretStashForm>
            </section>
        )
    }
}

export default AddRecipeForm;