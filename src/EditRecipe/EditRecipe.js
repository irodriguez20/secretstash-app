import React, { Component } from 'react';
import SecretStashForm from '../SecretStashForm/SecretStashForm'
import Context from '../Context'
import config from '../config'
import PropTypes from 'prop-types'
import './EditRecipe.css'

class EditRecipe extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object
        }),
        history: PropTypes.shape({
            push: PropTypes.func
        }).isRequired,
    };

    static contextType = Context;

    state = {
        id: "",
        name: "",
        timetomake: "",
        description: "",
        folderid: 1,
        ingredients: "",
        steps: "",
    };

    componentDidMount() {
        const { recipeId } = this.props.match.params;
        fetch(config.API_ENDPOINT + `/recipes/${recipeId}`, {
            method: "GET",
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => Promise.reject(error));
                }
                return res.json();
            })
            .then(responseData => {
                this.setState({
                    id: responseData.id,
                    name: responseData.name,
                    timetomake: responseData.timetomake,
                    description: responseData.description,
                    folderid: responseData.folderid,
                    steps: responseData.steps,
                    ingredients: responseData.ingredients
                });
            })
            .catch(error => {
                console.error(error);
            })
    }

    handleChangeName = e => {
        this.setState({ name: e.target.value });
    }

    handleChangetimetomake = e => {
        this.setState({ timetomake: e.target.value });
    }

    handleChangeDescription = e => {
        this.setState({ description: e.target.value });
    }

    handleChangeFolderId = e => {
        this.setState({ folderid: e.target.value });
    }

    handleChangeIngredients = e => {
        this.setState({ ingredients: e.target.value });
    }

    handleChangeSteps = e => {
        this.setState({ steps: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { recipeId } = this.props.match.params;
        const { id, name, description, timetomake, steps, folderid, ingredients } = this.state;
        const updatedRecipe = { id, name, description, timetomake, steps, folderid, ingredients };

        fetch(config.API_ENDPOINT + `/recipes/${recipeId}`, {
            method: "PATCH",
            body: JSON.stringify(updatedRecipe),
            headers: {
                "content-type": "application/json"
            },
        })
            .then(res => {
                if (!res.ok) return res.json().then(error => Promise.reject(error));
            })
            .then(() => {
                this.resetFields(updatedRecipe);
                this.context.updateRecipe(updatedRecipe);
                this.props.history.push('/');
            })
            .catch(error => {
                console.error({ error })
            });
    };

    resetFields = (newFields) => {
        this.setState({
            id: newFields.id || "",
            name: newFields.name || "",
            timetomake: newFields.timetomake || "",
            description: newFields.description || "",
            folderid: newFields.folderid || "",
            ingredients: newFields.ingredients || "",
            steps: newFields.steps || "",
        });
    };

    handleClickCancel = () => {
        this.props.history.push("/");
    };

    render() {
        const { name, folderid, timetomake, description, ingredients, steps } = this.state;
        const { folders = [] } = this.context;
        return (
            <section className="EditRecipe">
                <header className="EditRecipe">
                    <h1>Update Recipe</h1>
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
                            value={name}
                            onChange={this.handleChangeName}
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="recipe-timetomake-input">
                            Estimated Time
                            {' '}
                        </label>
                        <input
                            type='text'
                            name='timetomake'
                            id='timetomake'
                            value={timetomake}
                            onChange={this.handleChangetimetomake}
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor='recipe-folder-select'>
                            Folder
                            {' '}
                        </label>
                        <select
                            id="folderid"
                            name="folderid"
                            onChange={this.handleChangeFolderId}
                            required
                        >
                            <option value={folderid}>...</option>
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
                            value={description}
                            onChange={this.handleChangeDescription}
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
                            value={ingredients}
                            onChange={this.handleChangeIngredients}
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
                            value={steps}
                            onChange={this.handleChangeSteps}
                            required></textarea>
                    </div>
                    <div className='buttons'>
                        <button type='button' onClick={this.handleClickCancel}>Cancel
                    </button>
                        {" "}
                        <button type='submit'>Update recipe</button>
                    </div>
                </SecretStashForm>
            </section>
        );
    }
}

export default EditRecipe;