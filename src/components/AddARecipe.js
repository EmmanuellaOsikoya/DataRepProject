import { useState } from "react";

function AddARecipe() {
    const [recipeName, setRecipeName, setCookingTime, setServingSize, setIngredients, setMethod, setPicture] = useState('');

    const submit = (e) => {
        e.preventDefault();
        console.log(recipeName);
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
                    onChange={(e) => {setRecipeName(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Add Cooking Time: </label>
                    <input type="text" 
                    className="form-control" 
                    value={recipeName}
                    onChange={(e) => {setCookingTime(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Add Serving Size: </label>
                    <input type="text" 
                    className="form-control" 
                    value={recipeName}
                    onChange={(e) => {setServingSize(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Add Ingredients: </label>
                    <input type="text" 
                    className="form-control" 
                    value={recipeName}
                    onChange={(e) => {setIngredients(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Add Method: </label>
                    <input type="text" 
                    className="form-control" 
                    value={recipeName}
                    onChange={(e) => {setMethod(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Add Picture: </label>
                    <input type="img" 
                    className="form-control" 
                    value={recipeName}
                    onChange={(e) => {setPicture(e.target.value)}}/>
                </div>
                <input type="submit" value="Add Recipe" />
            </form>
        </div>
    );

}

export default AddARecipe;