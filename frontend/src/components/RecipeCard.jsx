// src/components/RecipeCard.jsx
import React from 'react';

const RecipeCard = ({ recipe }) => {
  const { title, ingredients, instructions, image } = recipe;
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col mt-30">
      {image && <img src={image} alt={title} className="rounded-xl mb-4 h-48 w-full object-cover" />}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      <h3 className="font-medium">Ingredients:</h3>
      <ul className="list-disc list-inside mb-4">
        {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>

      <h3 className="font-medium">Instructions:</h3>
      <ol className="list-decimal list-inside">
        {instructions.map((step, i) => <li key={i}>{step}</li>)}
      </ol>
    </div>
  );
};

export default RecipeCard;