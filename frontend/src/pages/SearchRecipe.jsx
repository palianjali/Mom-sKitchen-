import React, { useState } from 'react';
import axios from 'axios';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { assets } from '../assets/assets';

const SearchRecipe = () => {
  const [ingredients, setIngredients] = useState('');
  const [preferences, setPreferences] = useState('');
  const [mealType, setMealType] = useState('breakfast');
  const [recipe, setRecipe] = useState('');
  const [image, setImage] = useState('');
  const [showRecipe, setShowRecipe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/ai/suggest', {
        ingredients: ingredients.split(',').map((i) => i.trim()),
        preferences: preferences.split(',').map((p) => p.trim()),
        mealType,
      });

      setRecipe(res.data.recipe);
      setImage(res.data.image);
      setShowRecipe(true); // Auto-show result after search
    } catch (err) {
      console.error('Error fetching recipe:', err);
      setRecipe('Failed to fetch recipe');
      setImage('');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center px-4 py-10 mt-25"
      style={{ backgroundImage: `url(${assets.img5})` }}
    >
      <h1 className="text-4xl font-bold text-white mb-10 drop-shadow-lg">AI Recipe Generator</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/30"
      >
        <input
          type="text"
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg border border-white/40 focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        <input
          type="text"
          placeholder="Preferences (comma separated)"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg border border-white/40 focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        <select
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          className="w-full mb-6 p-3 rounded-lg border border-white/40 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          <option>breakfast</option>
          <option>lunch</option>
          <option>dinner</option>
          <option>snack</option>
        </select>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all"
        >
          Get Recipe
        </button>
      </form>

      {(recipe || image) && (
        <div className="mt-10 w-full max-w-3xl backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-xl p-6 text-white">
          {/* Toggle Button */}
          <button
            onClick={() => setShowRecipe(!showRecipe)}
            className="flex items-center gap-2 text-lg font-semibold mb-4"
          >
            {showRecipe ? 'Hide Recipe' : 'Show Recipe'}
            {showRecipe ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {showRecipe && (
            <div className="transition-all duration-300">
              {image && (
                <img
                  src={image}
                  alt="Dish"
                  className="w-full h-64 object-cover rounded-xl mb-6 border-2 border-white/40 shadow-md"
                />
              )}
              <pre className="whitespace-pre-wrap text-lg leading-relaxed font-medium drop-shadow">
                {recipe}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchRecipe;
