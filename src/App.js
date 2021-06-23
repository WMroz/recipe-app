import './App.css';
import Recipe from './Recipe';
import React, { useEffect, useState } from "react";

const App = () => {

  const APP_ID = 'fe567995';
  const APP_KEY = '301c1706ccd468c6212d72dc479b55e4';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

/**
 * renders only when query changes so when user clicks search
 * using 'query' allows us to limit searches
 */
  useEffect( () =>{
    getRecipes();
  }, [query]);

/**
 * fetch data from api and creates json
 * from date we get hits where we have needed infor
 */
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  /**
  * gets value from imput from search bar
  */
    const updateSearch = e => {
    setSearch(e.target.value);
  }

  /**
   * gets what user wants to search and then changes to empty string
   */
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  /**
   * structer of our application with Recipe component
   */
  return (
    <div className="App">
      <div className="head">
              <div className="text-label">
        <h1>What dish do you fancy today?</h1>
        </div>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch}/>
        <button className="search-btn" type="submit">Search</button>
      </form>
      </div>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label} 
        title={recipe.recipe.label}
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}/> 
      ))};
      </div>
    </div>
  )
}

export default App;
