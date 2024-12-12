//sets up express and ensures that the port that the localhost will run on is localhost port 4000
const express = require('express');
const app = express();
const port = 4000;
//using CORS (Cross-Origin Resource sharing) to make sure that the web pages are only making requests to on port (in this case port 4000)
const cors = require('cors');
//connects to mongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster1.8qpbe.mongodb.net/MyRecipeDB');

//adding body-parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
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

app.get('/api/recipe/:id', async (req, res) =>{
  const recipe = await Recipe.findById(req.params.id);
  res.send(recipe);
});

app.post('/api/recipes', (req, res) => {
  console.log("Recipe: " + req.body.recipeName);
  res.send("Recipes recieved");
})