import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

//file is responsible for editing recipes on the WhiskAway website
function Change(props) {
    let {id} = useParams();
    const [recipeName, setRecipeName] = useState("");
    const [cookingTime, setCookingTime] = useState("")
    const [servings, setServingSize] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [method, setMethod] = useState("")
    const [picture, setPicture] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/api/recipes/' + id)
            .then((response) => {
                setRecipeName(response.data.recipeName);
                setCookingTime(response.data.cookingTime);
                setServingSize(response.data.servings);
                setPicture(response.data.picture);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    //logic that is responsible for updating the recipes when the form is submitted
    const submit = (event) => {
        event.preventDefault();
        const newRecipe = {id, recipeName, cookingTime, servings, ingredients, method, picture};
        axios.put('http://localhost:4000/api/recipes/' + id, newRecipe)
            .then((res) => {
                console.log(res.data);
                navigate('/recipes')
            });
    }

    //form the user fills out to edit recipes
    return (
        <div>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>Recipe Name: </label>
                    <input type="text"
                    className="form-control"
                    vlaue={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Cooking Time: </label>
                    <input type="text"
                    className="form-control"
                    vlaue={cookingTime}
                    onChange={(e) => setCookingTime(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Serving Size: </label>
                    <input type="text"
                    className="form-control"
                    vlaue={servings}
                    onChange={(e) => setServingSize(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Ingredients: </label>
                    <input type="text"
                    className="form-control"
                    vlaue={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Method: </label>
                    <input type="text"
                    className="form-control"
                    vlaue={method}
                    onChange={(e) => setMethod(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Picture: </label>
                    <input type="text"
                    className="form-control"
                    vlaue={picture}
                    onChange={(e) => setPicture(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Recipe" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )

}

export default Change;