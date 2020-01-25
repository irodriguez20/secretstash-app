import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import CircleButton from '../CircleButton/CircleButton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RecipePageMainScreenShot from '../RecipePageMainScreenShot.png'
import './LandingPage.css';

class LandingPage extends Component {

    render() {
        return (
            <div className="LandingPage">
                <main className="LandingPage__main">
                    <header className="LandingPage-title">

                        <h1>Secret Stash</h1>

                    </header>
                    <section className='LandingPage__why'>
                        <h3>Why Secret Stash</h3>
                        <p> Recipes are memories captured in food. They are family heirlooms passed down from generation to generation. Losing
                          a recipe, is losing something very special and sentimental. Recipes on paper are a thing of the past. As Generations
                          continue to grow technologically, recipes on paper will become obsolete. We need a way to store our family history with
				a lowered risk of loss.</p>
                    </section>
                    <section className='LandingPage__recycle'>
                        <h3>Save the Trees</h3>
                        <h4><FontAwesomeIcon icon="recycle" /> <FontAwesomeIcon icon="tree" /></h4>
                        <p>Research shows the average household throws away 13,000 pieces of paper a year. Storing your recipes online eliminates the use of paper, decreasing the amount of trees cut down and paper wasted.</p>
                    </section>
                    <section className='LandingPage__organized'>
                        <h3>Organized in One Place</h3>
                        <img src={RecipePageMainScreenShot} alt="screenshot of the recipe main screen" />
                        <p>My family and I are notorious for having recipes saved everywhere. From bookmarks on safari, stashed in recipe boxes, folders, even saved as images on our phones. <br /> With Secret Stash all of your recipes are neatly organized on one app. Create folders for the different categories, edit and delete recipes as desired. </p>
                    </section>
                    {/*To come when I add authorization and user accounts. <section className='LandingPage__share'>
                        <h3>Share with your Family Members</h3>
                        <p>[<em>placeholder for screenshot of how to share profile/recipe</em>]</p>
                        <p>To many times to count I have wanted a recipe from a family member and end up having to go through a handful of people before I can recieve it. Secret Stash eliminates the telephone game. Easily share family recipes with a simple click of a button.</p>
                    </section> */}
                    <div className='LandingPage__button-container'>
                        <CircleButton
                            tag={Link}
                            to='/'
                            type='button'
                            className='LandingPage__get-started-button'
                        >
                            Get Started
                    </CircleButton>
                    </div>
                </main>
            </div>
        );
    }
}

export default LandingPage;
