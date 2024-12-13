const express = require('express');
const app = express();
const port = 4000;
//using CORS (Cross-Origin Resource sharing) to make sure that the web pages are only making requests to on port (in this case port 4000)
const cors = require('cors');
//connects to mongoDB
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb+srv://admin:admin@cluster1.8qpbe.mongodb.net/MyRecipeDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//allows the usage of the specified http requests
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const recipeSchema = new mongoose.Schema({
  recipeName: String,
  cookingTime: String,
  servings: String,
  ingredients: String,
  method: String,
  picture: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);

//creates a new recipe
app.post('/api/recipes', async (req,res) =>{
  const {recipeName, cookingTime, servings, ingredients, method, picture} = req.body

  const newRecipe = new Recipe({recipeName, cookingTime, servings, ingredients, method, picture});
  await newRecipe.save();

  res.status(201).json({message: 'Recipe created successfully', recipe: newRecipe});
})

app.get('/api/recipes', async (req, res) => {
  const recipes = await Recipe.find({});
  res.json(recipes);
});

app.get('/api/recipes/:id', async (req, res) =>{
  const recipe = await Recipe.findById(req.params.id);
  res.send(recipe);
});

app.put('/api/recipes/:id', async (req,res) => {
  let recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, res.send(recipe));
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.delete('api/movie/:id', async (req,res) => {
  console.log('Deleting recipe with ID: ', req.params.id);
  const recipe = await Recipe.findByIdAndDelete(req.params.id);
  res.status(200).send({message: "Recipe deleted successfully", recipe});
})