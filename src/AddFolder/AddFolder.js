import React, { Component } from 'react';


class AddFolder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() {
        return (
            <div>
                <main>
                    <header role="banner">
                        <h1>Add a New Folder</h1>
                    </header>
                    <section>
                        <form>
                            <div className="form-seciton">
                                <label htmlFor="folder-name">Folder Name</label>
                                <input placeholder='Breakfast' type="text" name='folder-name' id='folder-name' required />
                            </div>
                            <button type='submit'>Add</button>
                            <button type='back'>Cancel</button>
                        </form>
                    </section>
                </main>
                <footer>Footer</footer>
            </div>
        );
    }
}

export default AddFolder;