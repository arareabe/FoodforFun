import React, { useEffect, useState } from 'react';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const recipes = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_FOOD_KEY}&number=7`)
    const data = await recipes.json();
    console.log(data);
    setPopular(data.recipes);
  }

  return (
    <>
      <h2>Popular</h2>
      {popular.map((recipe) => {
        return (
          <p>{recipe.title}</p>
        );
      })}
    </>
  )
}

export default Popular;
