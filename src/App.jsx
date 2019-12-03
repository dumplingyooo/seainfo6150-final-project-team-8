import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import allCategories from './RecipeWeb/AllCategories';
import Homepage from './RecipeWeb/Homepage.jsx';
import AddRecipe from './RecipeWeb/AddRecipe.jsx';
import Analyse from './RecipeWeb/Detail';
import contactus from './RecipeWeb/contactus.jsx';
import about from './RecipeWeb/about';
import Error from './RecipeWeb/Error';
import IndividualPage from './RecipeWeb/RecipePage';
import styles from './App.module.css';


function App() {
  return (
    <Router>
      <header>
          <h1>Cooking Master</h1>
          <ul className={styles.nav}>
            <li>
              <Link className={styles.link_white} to="/">Home</Link>
            </li>
            <li>
              <Link className={styles.link_white} to="/AllCategories">All Categories</Link>
            </li>
            <li>
              <Link className={styles.link_white} to="/AddRecipe">Add Recipe</Link>
            </li>
            <li>
              <Link className={styles.link_white} to="/Contact">Contact</Link>
            </li>
            <li>
              <Link className={styles.link_white}to="/About">About</Link>
            </li>
          </ul>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/AllCategories" exact component={allCategories} />
        <Route path ="/AddRecipe" exact component = {AddRecipe}/>
        <Route path="/Contact" component={contactus} />
        <Route path="/About" component={about} />
        <Route
          path="/AllCategories/:individual"
          exact
          render={({ match }) => (
            <IndividualPage
              individual={match.params.individual}
            />
          )}
        />
        <Route
          path="/AllCategories/:individual/:info"
          exact
          render={({ match }) => (
            <Analyse
              individual={match.params.individual}
              info={match.params.info}
            />
          )}
        />

        <Route component={Error} />
      </Switch>
    </Router>
  );
}

/* <RecipePage
individual={match.params.individual}
/> */

export default App;


