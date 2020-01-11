import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Context from '../Context'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
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
        console.log('clicked delete on recipe.js')
        // const recipeId = this.props.id;
    }

    render() {

        console.log('recipe props', this.props)
        const { name, id, description, time } = this.props;
        return (
            <div className="Recipe">
                <main>
                    <section>
                        <header className="Recipe__title">
                            <h2><Link to={`/recipe/${id}`}>{name}</Link></h2>
                            <h3>{time}</h3>
                        </header>

                        <blockquote>{description}</blockquote>
                        <Link to={`/edit/${id}`}>
                            <button type="edit">Edit</button></Link>

                        <button className='Recipe__delete' onClick={this.handleClickDelete} type="button">
                            <FontAwesomeIcon icon="trash-alt" />
                            {" "}
                            Delete
                    </button>
                    </section>
                </main>
            </div>
        );
    }
}

export default Recipe;