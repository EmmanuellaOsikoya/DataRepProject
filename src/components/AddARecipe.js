import { useState } from "react";
import axios from "axios";

function AddARecipe() {
    //use state is used to create state variables for each form field
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
            recipeName: recipeName,
            cookingTime: cookingTime,
            servings: servings,
            ingredients: ingredients,
            method: method,
            picture: picture
        };

        //sends the form to the backend where it will then save it to the database
        axios.post('http://localhost:4000/api/recipes', recipes)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.data));


    }

    //form that allows users to create a new recipe to add to the WhiskAway website
    return (
        <div className="text-center" style={{ backgroundImage: 'url(/macarons.jpg)', height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="col-md-6 bg-white p-4 rounded shadow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                    <h2>Use the form here to add a new recipe to WhiskAway!</h2>
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <label>Add Recipe Name: </label>
                            <input type="text"
                                className="form-control mx-auto"
                                value={recipeName}
                                onChange={(e) => { setRecipeName(e.target.value) }}
                                style={{ width: '40%', height: '30px', fontSize: '14px', alignItems: 'center' }} />
                        </div>
                        <div className="form-group">
                            <label>Add Cooking Time: </label>
                            <input type="text"
                                className="form-control mx-auto"
                                value={cookingTime}
                                onChange={(e) => { setCookingTime(e.target.value) }}
                                style={{ width: '40%', height: '30px', fontSize: '14px' }} />
                        </div>
                        <div className="form-group">
                            <label>Add Serving Size: </label>
                            <input type="text"
                                className="form-control mx-auto"
                                value={servings}
                                onChange={(e) => { setServingSize(e.target.value) }}
                                style={{ width: '40%', height: '30px', fontSize: '14px' }} />
                        </div>
                        <div className="form-group">
                            <label>Add Ingredients: </label>
                            <input type="text"
                                className="form-control mx-auto"
                                value={ingredients}
                                onChange={(e) => { setIngredients(e.target.value) }}
                                style={{ width: '40%', height: '30px', fontSize: '14px' }} />
                        </div>
                        <div className="form-group">
                            <label>Add Method: </label>
                            <input type="text"
                                className="form-control mx-auto"
                                value={method}
                                onChange={(e) => { setMethod(e.target.value) }}
                                style={{ width: '40%', height: '30px', fontSize: '14px' }} />
                        </div>
                        <div className="form-group">
                            <label>Add Picture: </label>
                            <input type="text"
                                className="form-control mx-auto"
                                value={picture}
                                onChange={(e) => { setPicture(e.target.value) }}
                                style={{ width: '40%', height: '30px', fontSize: '14px' }} />
                        </div>
                        <input type="submit" value="Add Recipe" />
                    </form>
                </div>
            </div>
        </div>
    );

}

export default AddARecipe;