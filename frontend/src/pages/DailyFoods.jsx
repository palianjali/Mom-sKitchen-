import React from "react";
import { assets } from "../assets/assets";
import RecipeHome from "../components/RecipeHome";


const dayName = new Date().toLocaleDateString("en-US", { weekday: "long" });

// 🕓 Get current hour
const hour = new Date().getHours();

// ⏰ Set dynamic greeting
let greeting;
if (hour >= 5 && hour < 12) {
  greeting = "Good Morning";
} else if (hour >= 12 && hour < 17) {
  greeting = "Good Afternoon";
} else if (hour >= 17 && hour < 21) {
  greeting = "Good Evening";
} else {
  greeting = "Good Night";
}

const DailyFoods = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-fuchsia-200 z-10 p-4 flex items-center justify-center gap-5 shadow">
        <div className="flex flex-col gap-1 font-serif">
          <h1 className="text-4xl font-bold">Mom's Daily Kitchen</h1>
          <h1 className="text-2xl font-medium">
            {greeting}, it's {dayName}! 👋
          </h1>
        </div>
        <div>
          <img
            src={assets.chefimg02}
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 object-cover rounded-full"
            alt="Chef"
          />
        </div>
      </div>

      <div className="mt-40">
        <RecipeHome />
      </div>
    </>
  );
};

export default DailyFoods;
