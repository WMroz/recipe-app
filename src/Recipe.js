import React from 'react';
import style from './recipe.module.css';

/**
 * recipe component
 * app passes needed data to this component
 */
const Recipe = ({key, title, calories, image, ingredients}) => {
    return (
        <div>
<<<<<<< HEAD
            <img src={image} alt=" missing food img here"/>
=======
            <img src={image} alt=" missing food pic here"/>
>>>>>>> f324677213be45cc22226a5dec3c9bffe6482207
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
