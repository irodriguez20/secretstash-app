import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import './AddRecipeForm.css';

class AddRecipeForm extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <main>
                    <header role="banner">
                        <h1>Add a New Memory</h1>
                    </header>
                    <section>
                        <form>
                            <div className="form-section">
                                <label htmlFor="recipe-name">Recipe Name</label>
                                <input placeholder='Grandmas tortilla soup' type="text" name='recipe-name' id='recipe-name' required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="estimated-time">Estimated Time</label>
                                <input placeholder='1hr' type='text' name='estimated-time' id='estimated-time' />
                            </div>
                            <div className="form-section">
                                <label htmlFor='folderid'>Folder to Add To</label>
                                <input type="radio" name='folderid' id='folderid' className="folderid-radio" />
                                <label htmlFor='folderid'>
                                    <span>Dinner</span>
                                </label>
                                <input type="radio" name='folderid' id='folderid' className="folderid-radio" />
                                <label htmlFor='folderid'>
                                    <span>Lunch</span>
                                </label>
                                <input type="radio" name='folderid' id='folderid' className="folderid-radio" />
                                <label htmlFor='folderid'>
                                    <span>Breakfast</span>
                                </label>
                                <input type="radio" name='folderid' id='folderid' className="folderid-radio" />
                                <label htmlFor='folderid'>
                                    <span>Dessert</span>
                                </label>
                                <input type="radio" name='folderid' id='folderid' className="folderid-radio" />
                                <label htmlFor='folderid'>
                                    <span>Drinks</span>
                                </label>
                                <p>[<em>Add options for folders</em>]</p>
                            </div>
                            <div className="form-section">
                                <label htmlFor="ingredients">Ingredients</label>
                                <textarea placeholder=' 8oz Tomato paste, 1lb shredded chicken breast' rows='7' type='text' name='ingredients' id='ingredients' required></textarea>
                            </div>
                            <div className="form-section">
                                <label htmlFor="steps">Steps</label>
                                <textarea rows='15' type='text' name='steps' id='steps' required></textarea>
                            </div>
                            <button type='submit'>Add</button>
                            <button type='back'>Cancel</button>
                        </form>
                    </section>
                </main>
                <footer className="content-info">Footer</footer>
            </div>
        )
    }
}

export default AddRecipeForm;