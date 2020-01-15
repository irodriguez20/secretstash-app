import React, { Component } from 'react';
import SecretStashForm from '../SecretStashForm/SecretStashForm'
import Context from '../Context'
import PropTypes from 'prop-types'
import './AddFolder.css'


class AddFolder extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: () => { }
        }).isRequired,
    };

    static contextType = Context;


    handleSubmit = (e) => {
        e.preventDefault();
        const { foldername } = e.target
        const folder = {
            foldername: foldername.value
        };
        this.context.addFolder(folder);
        this.props.history.push('/')

    }

    render() {
        return (
            <div>
                <header className="AddFolder">
                    <h1>Add a New Folder</h1>
                </header>
                <SecretStashForm onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label htmlFor="folder-name-input">Folder Name</label>
                        <input
                            placeholder='Breakfast'
                            type="text"
                            name='foldername'
                            id='foldername'
                            required
                        />
                    </div>
                    <div className='buttons'>
                        <button type='submit'>Add</button>
                    </div>
                </SecretStashForm>
            </div>
        );
    }
}

export default AddFolder;