import React from "react"
import './App.css'

export default function Ingredients({ ingredientsList, toggleRecipeShown }) {


    return (
        ingredientsList.length > 0 &&
        <>

            <h1>Ingredients on hand </h1>
            <ul>
                {ingredientsList}
            </ul>

            {ingredientsList.length > 3 &&

                <div className='get-recipe-container'>
                    <div>
                        <h3>Ready for recipe? </h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={toggleRecipeShown}> Get a recipe</button>
                </div>
            }
        </>
    )

}

