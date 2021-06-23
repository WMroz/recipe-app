import React from 'react';
import style from './recipe.module.css';

/**
 * recipe component
 * app passes needed data to this component
 */
const Recipe = ({key, title, calories, image, ingredients}) => {
    return (
        <div>
            <img src={image} alt=""/>
            <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>Calories: <b>{calories.toFixed(0)}</b></p>
            </div>
        </div>
    );
}

export default Recipe;