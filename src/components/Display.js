//all recipes were sourced from the bbcgoodfood website

import Recipes from "./Recipes"
import { useEffect, useState } from "react";
import axios from "axios";

function Display() {

  //json data is now read from a json api 
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('https://jsonblob.com/api/jsonblob/1316050341682405376')
      .then((response) => {
        console.log(response)
        setRecipes(response.data.recipes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
    style={{
      backgroundImage: 'url(/food.jpg)',
      height: '300vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',  
      flexDirection: 'column',  
      justifyContent: 'center',  
      alignItems: 'center',  
      textAlign: 'center', 
    }}
  >
      <h3 style={{ color: 'white' }}>Choose a recipe to follow: </h3>
      <Recipes myRecipes={recipes} />
    </div>
  );

}



export default Display;