import React, { useEffect, useState } from "react";
import { fetchDailyRecipe } from "../services/api";
import RecipeCard from "../components/RecipeCard";
import Lottie from "lottie-react";
import Animation02 from '../assets/Animation02.json'
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const RecipeHome = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDailyRecipe().then((res) => {
      setData(res.data);
      console.log("📦 Fetched Data:", res.data);
    });
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-teal-200">
        <div className="w-80 h-60">
          <Lottie animationData={Animation02} loop={true} className="w-100" />
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white p-6">
      <motion.h1
        className="text-3xl font-bold text-center mb-4 text-amber-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        🍽️ {data.day}'s Indian Recipes 😋🍛
      </motion.h1>

      {/* Show intro content before the cards, outside any box */}
      <p className="text-lg text-gray-700 text-center mb-6 max-w-3xl mx-auto">
        {data.intro}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {data.recipes.map((recipe, idx) => (
          <RecipeCard key={idx} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeHome;
