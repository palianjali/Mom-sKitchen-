// import axios from "axios";
// import React, { useState } from "react";
// import {assets} from '../assets/assets'
// const SearchRecipe = () => {
//   const [ingredients, setIngredients] = useState("");
//   const [preferences, setPreferences] = useState("");
//   const [mealType, setMealType] = useState("breakfast");
//   const [recipe, setRecipe] = useState("");
//   const [image, setImage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:5000/api/ai/suggest", {
//         ingredients: ingredients.split(",").map((i) => i.trim()),
//         preferences: preferences.split(",").map((p) => p.trim()),
//         mealType,
//       });

//       setRecipe(res.data.recipe);
//       setImage(res.data.image); // 👈 set image URL
//     } catch (err) {
//       console.error("Error fetching recipe:", err);
//       setRecipe("Failed to fetch recipe");
//       setImage("");
//     }
//   };
//   return (
//     <div className="w-full  mt-30 h-full"
//     >
//       <h1 className="text-3xl font-bold text-center mb-6 prata-regular p-8">
//         AI Recipe Generator
//       </h1>
//       <form onSubmit={handleSubmit} className="w-full md:w-[50%] mx-auto bg-white p-6 rounded-lg shadow-md">
//         <input
//           type="text"
//           placeholder="Ingredients (comma separated)"
//           value={ingredients}
//           onChange={(e) => setIngredients(e.target.value)}
//           className="w-full mb-4 p-2 border rounded placeholder:text-xl"
//         />
//         <input
//           type="text"
//           placeholder="Preferences (comma separated)"
//           value={preferences}
//           onChange={(e) => setPreferences(e.target.value)}
//           className="w-full mb-4 p-2 border rounded placeholder:text-xl"
//         />
//         <select
//           value={mealType}
//           onChange={(e) => setMealType(e.target.value)}
//           className="w-full mb-4 p-2 border rounded text-xl"
//         >
//           <option>breakfast</option>
//           <option>lunch</option>
//           <option>dinner</option>
//           <option>snack</option>
//         </select>
//         <button
//           type="submit"
//           className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 text-xl font-serif cursor-pointer"
//         >
//           Get Recipe
//         </button>
//       </form>

//       {(recipe || image) && (
//         <div className="flex flex-col items-center w-full md:w-[50%] mx-auto mt-6 bg-white p-4 rounded shadow text-gray-800">
//           {image && (
//             <img
//               src={image}
//               alt="Dish"
//               className="md:w-[70%] h-80 rounded mb-4 border"
//             />
//           )}
//           <pre className="whitespace-pre-wrap">{recipe}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchRecipe;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { ChevronDown, ChevronUp } from 'lucide-react';
// import { assets } from '../assets/assets';

// const SearchRecipe = () => {
//   const [ingredients, setIngredients] = useState('');
//   const [preferences, setPreferences] = useState('');
//   const [mealType, setMealType] = useState('breakfast');
//   const [recipe, setRecipe] = useState('');
//   const [image, setImage] = useState('');
//   const [showRecipe, setShowRecipe] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('https://mom-skitchen-02.onrender.com/api/ai/suggest', {
//         ingredients: ingredients.split(',').map((i) => i.trim()),
//         preferences: preferences.split(',').map((p) => p.trim()),
//         mealType,
//       });

//       setRecipe(res.data.recipe);
//       setImage(res.data.image);
//       setShowRecipe(true); // Auto-show result after search
//     } catch (err) {
//       console.error('Error fetching recipe:', err);
//       setRecipe('Failed to fetch recipe');
//       setImage('');
//     }
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center px-4 py-10"
//       style={{ backgroundImage: `url(${assets.img8})` }}
//     >
//       <h1 className="text-4xl font-bold text-white mb-10 drop-shadow-lg mt-25 prata-regular">AI Recipe Generator</h1>

//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-xl bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/30"
//       >
//         <input
//           type="text"
//           placeholder="Ingredients (comma separated)"
//           value={ingredients}
//           onChange={(e) => setIngredients(e.target.value)}
//           className="text-xl w-full mb-4 p-3 rounded-lg border border-white/40 focus:outline-none focus:ring-2 focus:ring-green-300 placeholder:text-2xl"
//         />
//         <input
//           type="text"
//           placeholder="Preferences (comma separated)"
//           value={preferences}
//           onChange={(e) => setPreferences(e.target.value)}
//           className="text-xl w-full mb-4 p-3 rounded-lg border border-white/40 focus:outline-none focus:ring-2 focus:ring-green-300 placeholder:text-2xl"
//         />
//         <select
//           value={mealType}
//           onChange={(e) => setMealType(e.target.value)}
//           className=" w-full mb-6 p-3 rounded-lg border border-white/40 focus:outline-none focus:ring-2 focus:ring-green-300 text-2xl"
//         >
//           <option>breakfast</option>
//           <option>lunch</option>
//           <option>dinner</option>
//           <option>snack</option>
//         </select>
//         <button
//           type="submit"
//           className="text-2xl prata-regular w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-t-2xl font-semibold transition-all cursor-pointer"
//         >
//           Get Recipe
//         </button>
//       </form>

//       {(recipe || image) && (
//         <div className="mt-10 w-full max-w-3xl backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl shadow-xl p-6 text-white">
//           {/* Toggle Button */}
//           <button
//             onClick={() => setShowRecipe(!showRecipe)}
//             className="flex items-center gap-2 text-lg font-semibold mb-4"
//           >
//             {showRecipe ? 'Hide Recipe' : 'Show Recipe'}
//             {showRecipe ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//           </button>

//           {showRecipe && (
//             <div className="transition-all duration-300">
//               {image && (
//                 <img
//                   src={image}
//                   alt="Dish"
//                   className="w-full h-64 object-cover rounded-xl mb-6 border-2 border-white/40 shadow-md"
//                 />
//               )}
//               <pre className="whitespace-pre-wrap text-lg leading-relaxed font-medium drop-shadow">
//                 {recipe}
//               </pre>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchRecipe;


import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, UserRound, X } from "lucide-react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Update the condition to include the search route (adjust the path if needed)
  const isTransparentNavbar = 
    location.pathname === "/" ||
    location.pathname === "/home" ||
    location.pathname === "/search";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div
      className={`fixed right-0 top-0 left-0 z-50 flex justify-center items-center py-3 px-6 shadow-md transition-all duration-300 ${
        isTransparentNavbar ? "bg-transparent" : "bg-white"
      }`}
    >
      {/* Logo Section */}
      <div>
        <Link to="/">
          <img
            src={assets.logo2}
            alt="Logo"
            className="w-22 hover:scale-105 transition-transform duration-300 mr-5"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <ul className="hidden sm:flex gap-6 text-lg text-gray-700 font-medium">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `px-3 py-1 rounded-md transition duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white"
                  : "hover:bg-green-200 hover:text-green-600 hover:font-serif"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/challenge"
            className={({ isActive }) =>
              `px-3 py-1 rounded-md transition duration-300 ${
                isActive
                  ? "bg-green-500 text-white font-serif"
                  : "hover:bg-green-200 hover:text-green-600"
              }`
            }
          >
            Get-Challenge
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-1 rounded-md transition duration-300 ${
                isActive
                  ? "bg-green-500 text-white font-serif"
                  : "hover:bg-green-200 hover:text-green-600"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-1 rounded-md transition duration-300 ${
                isActive
                  ? "bg-green-500 text-white font-serif"
                  : "hover:bg-green-200 hover:text-green-600"
              }`
            }
          >
            Contact
          </NavLink>
        </ul>

        {/* Profile Icon with Logout Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowLogout(true)}
          onMouseLeave={() => setShowLogout(false)}
        >
          <div className="gap-4 flex items-center hover:bg-green-100 p-2 rounded-full cursor-pointer transition duration-300">
            <UserRound
              size={30}
              className="text-gray-700 hover:text-green-600 transition duration-300"
            />
          </div>

          {showLogout && (
            <div className="absolute top-12 right-0 bg-white border rounded-md shadow-md py-2 px-4 z-50">
              <button
                onClick={handleLogout}
                className="text-red-600 font-medium hover:underline"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <Menu
          className="sm:hidden cursor-pointer"
          onClick={() => setVisible(true)}
        />
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-0 right-0 h-full z-50 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          visible ? "w-full" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col text-gray-700 pt-4">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 px-4 py-2 cursor-pointer"
          >
            <X size={28} />
          </div>
          <NavLink
            className="py-2 px-6 hover:bg-green-100"
            to="/home"
            onClick={() => setVisible(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="py-2 px-6 hover:bg-green-100"
            to="/challenge"
            onClick={() => setVisible(false)}
          >
            Challenge
          </NavLink>
          <NavLink
            className="py-2 px-6 hover:bg-green-100"
            to="/about"
            onClick={() => setVisible(false)}
          >
            About Us
          </NavLink>
          <NavLink
            className="py-2 px-6 hover:bg-green-100"
            to="/contact"
            onClick={() => setVisible(false)}
          >
            Contact
          </NavLink>
          <button
            onClick={() => {
              setVisible(false);
              handleLogout();
            }}
            className="py-2 px-6 text-left text-red-600 hover:bg-red-100"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
