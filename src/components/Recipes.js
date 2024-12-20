import RecipeItem from "./RecipeItem";

//passes data from a parent component to a child component which allows components to be dynamic and reusable
function Recipes (props) {
    
    return props.myRecipes.map(
        (recipe) => {
        return <RecipeItem key={recipe.id} myRecipe={recipe} />
});
}

export default Recipes;