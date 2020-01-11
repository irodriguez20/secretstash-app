import React, { Component } from 'react';
import Context from '../Context'
import STORE from '../STORE';


class UserMainScreen extends Component {
    state = {
        store: STORE
    };

    handleClickView() {
        console.log('handleClickView called')
    }

    handleClickDelete() {
        console.log('handleClickDelete called')
    }

    handleClickEdit() {
        console.log('handleClickedEdit called')
    }

    render() {

        const value = {
            folders: this.state.store,
            recipes: this.state.store
        }

        const { folders, recipes } = this.state.store

        return (
            <Context.Provider value={value}>
                <div className="body">
                    <main>
                        <header className="banner">
                            <h1>Recipe Book</h1>
                        </header>
                        <div className="row">
                            <section className="column left">
                                <section>
                                    <header>
                                        <h3>Folders</h3>
                                    </header>
                                </section>
                                <div className="folder-buttons">
                                    {folders.map(folder =>
                                        <button className="link" key={folder.id}>{folder.foldername}</button>
                                    )}
                                </div>
                            </section>
                            <div className="column right">
                                <div>
                                    <section>
                                        <header className="banner">
                                            <h3>Memories</h3>
                                        </header>
                                    </section>
                                    {recipes.map(recipe =>
                                        <section key={recipe.id}>
                                            <h4>{recipe.recipename}</h4>
                                            <blockquote>{recipe.description}</blockquote>
                                            <button onClick={this.handleClickEdit} className="edit">Edit</button>
                                            <button onClick={this.handleClickView} className="view">View</button>
                                            <button onClick={this.handleClickDelete} className="Delete">Delete</button>
                                        </section>
                                    )}
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer className="content-info">Footer</footer>
                </div>
            </Context.Provider>
        )
    }
}

export default UserMainScreen;