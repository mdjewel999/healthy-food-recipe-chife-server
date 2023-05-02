const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// categories Data
const categories = require("./data/categories.json");
const recipe = require("./data/recipe.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("food recipe  is running");
});

// categories Data
app.get("/categories", (req, res) => {
  console.log(categories);
  res.send(categories);
});

app.get("/recipe", (req, res) => {
  res.send(recipe);
});

app.get("/recipe/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectRecipe = recipe.find((n) => n._id === id);
  res.send(selectRecipe);
});

// recipe Data 
app.get('/categories/:id', (req, res)=>{
    const id =parseInt(req.params.id);

    if(id === 0){
        res.send(recipe)
    }
    else{
        const categoryRecipe = recipe.filter(n =>parseInt(n.category_id) === id);
        res.send(categoryRecipe)
    }
})

app.listen(port, () => {
  console.log(`food recipe API is running on port: ${port}`);
});
