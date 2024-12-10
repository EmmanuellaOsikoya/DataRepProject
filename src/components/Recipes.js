import RecipeItem from "./RecipeItem";

//passes data from a parent component to a child component which allows components to be dynamic and reusable
const Recipes = (props) => {
    return props.myRecipes.map(
        (recipe) => {
        return <RecipeItem myRecipe={recipe} />
});
}

export default Recipes;