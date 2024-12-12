import { useState } from "react";
import axios from "axios";

function AddARecipe() {
    const [recipeName, setRecipeName] = useState('');
    const [cookingTime, setCookingTime] = useState('')
    const [servings, setServingSize] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [method, setMethod] = useState('')
    const [picture, setPicture] = useState('')

    const submit = (e) => {
        e.preventDefault();
        console.log(`Recipe Name: ${recipeName}, Cooking Time: ${cookingTime} Servings: ${servings}, Ingredients: ${ingredients}, Method: ${method}, Picture: ${picture}`);

        const recipes = {
            recipeNameecipe: recipeName,
            cookingTime: cookingTime,
            servings: servings,
            ingredients: ingredients,
            method: method,
            picture: picture
        };

        axios.post('http://localhost:4000/api/recipes', recipes)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.data));


    }

    //form that allows users to create a new recipe to add to the WhiskAway website
    return (
        <div>
            <h2>Use the form here to add a new recipe to WhiskAway!</h2>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>Add Recipe Name: </label>
                    <input type="text"
                        className="form-control"
                        value={recipeName}
                        onChange={(e) => { setRecipeName(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Add Cooking Time: </label>
                    <input type="text"
                        className="form-control"
                        value={cookingTime}
                        onChange={(e) => { setCookingTime(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Add Serving Size: </label>
                    <input type="text"
                        className="form-control"
                        value={servings}
                        onChange={(e) => { setServingSize(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Add Ingredients: </label>
                    <input type="text"
                        className="form-control"
                        value={ingredients}
                        onChange={(e) => { setIngredients(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Add Method: </label>
                    <input type="text"
                        className="form-control"
                        value={method}
                        onChange={(e) => { setMethod(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Add Picture: </label>
                    <input type="img"
                        className="form-control"
                        value={picture}
                        onChange={(e) => { setPicture(e.target.value) }} />
                </div>
                <input type="submit" value="Add Recipe" />
            </form>
        </div>
    );

}

export default AddARecipe;