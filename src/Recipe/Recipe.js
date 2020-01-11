import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Context from '../Context'
import PropTypes from "prop-types";
import { Route, Link } from 'react-router-dom';

class Recipe extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: () => { }
        }).isRequired,
    };

    static contextType = Context;

    handleClickDelete = e => {
        e.preventDefault();
        const recipeId = this.props.id;
    }

    render() {

        const { name, id } = this.props;
        return (
            <div className="Recipe">
                <main>
                    <header className="banner">
                        <h2><Link to={`/recipe/${id}`}>{name}</Link></h2>
                    </header>
                    <Link to={`/edit/${id}`}>
                        <button type="edit">Edit</button></Link>

                    <button onClick={this.handleClickDelete} type="button">
                        <FontAwesomeIcon icon="trash-alt" />
                        {" "}
                        Delete
                    </button>
                </main>
            </div>
        );
    }
}

export default Recipe;