import React from 'react'
import './App.css'
import Ingredients from './Ingredients'
import Recipe from './Recipe'
import { getRecipeFromAI } from './ai'


function FormMain() {


  const [ingredients, setIngredients] = React.useState([])


  const ingredientsList = ingredients.map((ingredientItem) => {
    return <li key={ingredientItem}> {ingredientItem} </li>
  })




  // function to handle form action - receives formData 
  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient') // fetches data from the form field with name 'ingredient'
    setIngredients(prevIngredients => [
      ...prevIngredients,
      newIngredient
    ]
    )

  }

  const [recipe, setRecipe] = React.useState("")


  async function toggleRecipeShown() {
    const recipeMarkDown = await getRecipeFromAI(ingredients)
    // console.log("======>>>>> ", recipeMarkDown)
    setRecipe(recipeMarkDown)




  }

  return (
    <div className='FormMain'>
      <form action={addIngredient}
        className='add-ingredient-form'>
        <input
          required={true}
          name='ingredient'
          aria-label='Add Ingredient'
          type='text'
          placeholder='e.g. Oregano'
        />
        <button>Add Ingredient</button>
      </form>

      {/* render Ingredients component if length of array > 0 */}
      {
        ingredientsList.length > 0 &&
        <Ingredients ingredientsList={ingredientsList}
          toggleRecipeShown={toggleRecipeShown} />
      }



      {recipe &&
        <Recipe
          recipe={recipe} />
      }


    </div>
  )



}

export default FormMain
