import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Context from '../Context'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import config from '../config'
import './Recipe.css'

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

        fetch(`${config.API_ENDPOINT}/recipes/${recipeId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e));
            })
            .then(() => {
                console.log(this.props)
                this.context.deleteRecipe(recipeId);
                this.props.history.push('/')
            })

            .catch(error => {
                console.log({ error });
            });
    }

    render() {
        const { name, id, description, timetomake } = this.props;
        return (
            <div className="Recipe">
                <section>
                    <header className="Recipe__title">
                        <h2><Link to={`/recipe/${id}`}>{name}</Link></h2>
                        <h3>{timetomake}</h3>
                    </header>

                    <blockquote>{description}</blockquote>
                    <Link to={`/edit/${id}`}>
                        <button type="edit">Edit</button>
                    </Link>

                    <button
                        className='Recipe__delete'
                        onClick={this.handleClickDelete}
                        type="button"
                    >
                        <FontAwesomeIcon icon="trash-alt" />
                        {" "}
                        Delete
                       </button>
                </section>
            </div>
        );
    }
}

export default Recipe;