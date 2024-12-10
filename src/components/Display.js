//all recipes were sourced from the bbcgoodfood website

import Recipes from "./Recipes"
const Display = () => {

  //Responsible for holding the JSON data from Recipes
  const jsonData = [
    {
      "RecipeName": "Madeleines",
      "PreparationTime": "Less than 30 mins",
      "CookingTime": "30 mins to 1 hour",
      "Servings": "Makes 12-16",
      "EquipmentNeeded": [
        "12-cup madeleine tray"
      ],
      "ingredients": [
        {
          "Name": "free-range eggs",
          "Quantity": "2",
          "Unit": "eggs"
        },
        {
          "Name": "caster sugar",
          "Quantity": "100g",
          "Unit": "grams"
        },
        {
          "Name": "plain flour",
          "Quantity": "100g",
          "Unit": "grams"
        },
        {
          "Name": "lemon",
          "Quantity": "1",
          "Unit": "whole",
          "AdditionalInfo": "juice and zest"
        },
        {
          "Name": "baking powder",
          "Quantity": "¾ tsp",
          "Unit": "teaspoon"
        },
        {
          "Name": "butter",
          "Quantity": "100g",
          "Unit": "grams",
          "AdditionalInfo": "melted and cooled slightly, plus extra for greasing"
        }
      ],
      "Method": [
        "Preheat the oven to 200C/400F/Gas 6. Brush the madeleine tray with melted butter then shake in a little flour to coat, tapping out the excess.",
        "Whisk together the eggs and the sugar in a bowl until frothy. Lightly whisk in the remaining ingredients. Leave to stand for 20 minutes before carefully pouring into the prepared madeleine tray.",
        "Bake for 8-10 minutes, or until the mixture has risen a little in the middle and is fully cooked through.",
        "Transfer the madeleines to a wire rack and leave for a few minutes to cool slightly. These are best eaten within an hour of cooking."
      ],

      "Picture": "/madeleines.jpg"
    },

    {
      "RecipeName": "Pizza Margherita in 4 Easy Steps",
      "PreparationTime": "25 mins",
      "CookingTime": "10 mins",
      "Servings": "Makes 2 pizzas, serves 4",
      "EquipmentNeeded": ["Rolling pin", "Baking sheet", "Large bowl"],
      "Ingredients": [
        {
          "Category": "Base",
          "Items": [
            { "Name": "Strong bread flour", "Quantity": "300g" },
            { "Name": "Instant yeast", "Quantity": "1 tsp", "Note": "from a sachet or a tub" },
            { "Name": "Salt", "Quantity": "1 tsp" },
            { "Name": "Olive oil", "Quantity": "1 tbsp", "Note": "plus extra for drizzling" }
          ]
        },
        {
          "Category": "Tomato Sauce",
          "Items": [
            { "Name": "Passata", "Quantity": "100ml" },
            { "Name": "Fresh basil", "Quantity": "Handful", "Note": "or 1 tsp dried" },
            { "Name": "Garlic clove", "Quantity": "1", "Note": "crushed" }
          ]
        },
        {
          "Category": "Topping",
          "Items": [
            { "Name": "Mozzarella", "Quantity": "125g", "Note": "sliced" },
            { "Name": "Parmesan", "Quantity": "Handful", "Note": "grated or shaved, or vegetarian alternative" },
            { "Name": "Cherry tomatoes", "Quantity": "Handful", "Note": "halved" }
          ]
        },
      ],
      "Method": [
        "Make the base: Put the flour into a large bowl, then stir in the yeast and salt. Make a well, pour in 200ml warm water and the olive oil and bring together with a wooden spoon until you have a soft, fairly wet dough. Turn onto a lightly floured surface and knead for 5 mins until smooth. Cover with a tea towel and set aside. You can leave the dough to rise if you like, but it’s not essential for a thin crust.",
        "Make the sauce: Mix the passata, basil, and crushed garlic together, then season to taste. Leave to stand at room temperature while you get on with shaping the base.",
        "Roll out the dough: If you’ve let the dough rise, give it a quick knead, then split into two balls. On a floured surface, roll out the dough into large rounds, about 25cm across, using a rolling pin. The dough needs to be very thin as it will rise in the oven. Lift the rounds onto two floured baking sheets.",
        "Top and bake: Heat the oven to 240C/220C fan/gas 8. Put another baking sheet or an upturned baking tray in the oven on the top shelf. Smooth sauce over bases with the back of a spoon. Scatter with cheese and tomatoes, drizzle with olive oil, and season. Put one pizza, still on its baking sheet, on top of the preheated sheet or tray. Bake for 8-10 mins until crisp. Serve with a little more olive oil and basil leaves if using. Repeat for the remaining pizza."
      ],


      "Picture": "/pizza.jpg"
    },
    {
      "RecipeName": "German pork schnitzel",
      "PreparationTime": "25 mins",
      "CookingTime": "10 mins",
      "Servings": "Serves 2",
      "EquipmentNeeded": [
        "Meat mallet",
        "Frying pan",
        "Shallow bowls"
      ],
      "Ingredients": [
        "300g pork loin steaks",
        "2 tbsp wholegrain mustard",
        "1 tsp horseradish paste",
        "50g plain flour",
        "2 eggs, beaten",
        "150g breadcrumbs",
        "200ml sunflower oil",
        "60g unsalted butter",
        "1 lemon, cut into wedges"
      ],
      "Method": [
        "Step 1: Put each steak into a freezer bag and, using a meat mallet or a heavy-based frying pan, pound both sides of the steak until it is around ½cm thick. Put the flour, eggs, and breadcrumbs into three shallow bowls.",
        "Step 2: Season both sides of each steak with salt and pepper. Spread the mustard and horseradish over the steaks evenly. Dredge the steaks in the flour, making sure they are completely coated before shaking off any excess. Dip in the egg, allowing any excess to drip off before transferring to the breadcrumbs and coating well, pressing to adhere. Give each steak a little shake and transfer to a wire rack.",
        "Step 3: Heat the sunflower oil in a pan until a sprinkle of breadcrumbs turns golden and sizzles. Fry the schnitzel for about 2 mins per side until golden, then remove and drain on kitchen paper. Add the butter to the pan and allow it to foam. Return the schnitzel to the pan and cook for 1 min on each side, then put it back onto kitchen paper with a lemon wedge on top to rest briefly. Serve with the lemon wedges."
      ],

      "Picture": "/schnitzel.jpg"
    },
    {
      "RecipeName": "Herby chicken gyros",
      "PreparationTime": "10 mins",
      "CookingTime": "4 mins",
      "Servings": "Serves 2",
      "EquipmentNeeded": [
        "Rolling pin",
        "Non-stick frying pan"
      ],
      "Ingredients": [
        "1 large skinless chicken breast",
        "Rapeseed oil (for brushing)",
        "1 small garlic clove, crushed",
        "½ tsp dried oregano",
        "2 tbsp Greek yogurt",
        "10 cm piece cucumber, grated (excess juice squeezed out)",
        "2 tbsp chopped mint (plus a few leaves to serve)",
        "2 wholemeal pitta breads",
        "2 red or yellow tomatoes, sliced",
        "1 red pepper from a jar (not in oil), deseeded and sliced"
      ],
      "Method": [
        "Step 1: Cut the chicken breast in half lengthways, then cover with cling film and bash with a rolling pin to flatten it. Brush with some oil, then cover with the garlic, oregano, and some pepper. Heat a non-stick frying pan and cook the chicken for a few mins each side. Meanwhile, mix the yogurt, cucumber, and mint to make tzatziki.",
        "Step 2: Cut the tops from the pittas along their longest side and stuff with the chicken, tomato, pepper, and tzatziki. Poke in a few mint leaves to serve. If taking to the office for lunch, pack the tzatziki in a separate pot and add just before eating to prevent the pitta going soggy before lunchtime."
      ],

      "Picture" : "/gyros.jpg"
    }




  ]

  return (
    <div>
      <h3>Hello from the Display component</h3>
      <Recipes myRecipes={jsonData} />
    </div>
  )

}



export default Display;