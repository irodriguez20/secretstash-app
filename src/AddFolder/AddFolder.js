import React, { Component } from 'react';
import SecretStashForm from '../SecretStashForm/SecretStashForm'
import Context from '../Context'
import PropTypes from 'prop-types'
import config from '../config'
import './AddFolder.css'


class AddFolder extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: () => { }
        }).isRequired,
    };

    static contextType = Context;


    handleSubmit = e => {
        e.preventDefault();
        const { foldername } = e.target
        const folder = {
            foldername: foldername.value
        };
        fetch(`${config.API_ENDPOINT}/folders`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(folder)
        })
            .then(res => {
                if (!res.ok) return res.json().then(e => Promise.reject(e));
                return res.json();
            })
            .then(folder => {
                this.context.addFolder(folder);
                this.props.history.push(`/`)
            })
            .catch(error => {
                console.log({ error })
            })

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

AddFolder.defaultProps = {
    history: PropTypes.Object
}

export default AddFolder;