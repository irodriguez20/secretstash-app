import React, { Component } from 'react';
import STORE from '../STORE';


class UserMainScreen extends Component {
    state = {
        store: STORE
    };

    render() {
        const { folders, recipes } = this.state.store;
        return (
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
                                        <button className="edit">Edit</button>
                                        <button className="view">View</button>
                                        <button className="Delete">Delete</button>
                                    </section>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="content-info">Footer</footer>
            </div>
        )
    }
}

export default UserMainScreen;