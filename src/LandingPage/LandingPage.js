import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {

    render() {
        return (
            <div className="LandingPage">
                {/* {this.renderNavRoutes()}
        <NavBar /> */}
                <main>
                    {/* <header className="banner">
            <Link to='/'>
              <h1>Secret Stash</h1>
            </Link>
          </header> */}
                    <section>
                        <h3>Why Secret Stash</h3>
                        <p> Recipes are memories captured in food. They are family heirlooms passed down from generation to generation. Losing
                          a recipe, is losing something very special and sentimental. Recipes on paper are a thing of the past. As Generations
                          continue to grow technologically, recipes on paper will become obsolete. We need a way to store our family history with
				a lowered risk of loss.</p>
                    </section>
                    <section>
                        <h3>Save the Trees</h3>
                        <p>[<em>placeholder for recycling symbol and a tree</em>]</p>
                        <p>Research shows the average household throws away 13,000 pieces of paper a year. Storing your recipes online eliminates the use of paper, decreasing the amount of trees cut down and paper wasted.</p>
                    </section>
                    <section>
                        <h3>Organized in One Place</h3>
                        <p>[<em>placeholder for screenshot of main recipe list screen</em>]</p>
                        <p>My family and I are notorious for having recipes saved everywhere. From bookmarks on safari, stashed in recipe boxes, folders, even saved as images on our phones. <br /> With Secret Stash all of your recipes are neatly organized on one app. Create folders for the different categories, edit and delete recipes as desired. </p>
                    </section>
                    <section>
                        <h3>Share with your Family Members</h3>
                        <p>[<em>placeholder for screenshot of how to share profile/recipe</em>]</p>
                        <p>To many times to count I have wanted a recipe from a family member and end up having to go through a handful of people before I can recieve it. Secret Stash eliminates the telephone game. Easily share family recipes with a simple click of a button.</p>
                    </section>
                </main>
                <footer className="content-info">Footer</footer>
            </div>
        );
    }
}

export default LandingPage;
