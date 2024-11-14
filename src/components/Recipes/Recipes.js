// src/components/Recipes.js
import React from 'react';
import './Recipes.css';

const recipes = [
  { title: "Avocado Toast", ingredients: ["Avocado", "Bread", "Salt", "Pepper"] },
  { title: "Smoothie Bowl", ingredients: ["Banana", "Berries", "Yogurt", "Honey"] },
  { title: "Grilled Chicken Salad", ingredients: ["Chicken", "Lettuce", "Tomato", "Cucumber"] }
];

const Recipes = () => {
  return (
    <div className="recipes">
      <h2>Healthy Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.title}</h3>
            <p>Ingredients: {recipe.ingredients.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
