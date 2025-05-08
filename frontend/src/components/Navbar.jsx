// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { assets } from "../assets/assets";
// import { User, User2Icon, UserRound } from "lucide-react";
// // import { UserIcon} from '@heroicons/react/24/outline'
// const Navbar = () => {
//   return (
//     <div className="flex items-center justify-between pt-2 shadow-md rounded-md">
//       <div className="ml-5">
//         <Link to="/home">
//           <img src={assets.logo} alt="" className="w-36" />
//         </Link>
//       </div>
//       <div className=" flex items-center justify-center h-25 gap-5 mr-9">
//         <ul className="hidden sm:flex gap-8 text-xl  text-gray-700 mr-5 font-medium">
//           <NavLink to="/home" className="hover:text-green-500 hover:font-serif">
//             <p>Home</p>
//           </NavLink>

//           <NavLink
//             className="hover:text-green-500 hover:font-serif"
//             to="/challenge"
//           >
//             <p>Get-Challenge</p>
//           </NavLink>

//           <NavLink className="hover:text-green-500 hover:font-serif">
//             <p>AboutUs</p>
//           </NavLink>

//           <NavLink className="hover:text-green-500 hover:font-serif">
//             <p>Contact</p>
//           </NavLink>
//         </ul>

//         <div className="flex items-center">
//           <UserRound size={32} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { BarChart3, Menu, UserRound, UserX2Icon, X } from "lucide-react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex justify-center items-center py-3 px-6 shadow-md rounded-md bg-gradient-to-r from-green-100 via-white  to-green-100 md:mt-6 md:mr-12 md:ml-12 mt-0">
      {/* Logo Section */}
      <div>
        <Link to="/home">
          <img
            src={assets.logo2}
            alt="Logo"
            className="w-18 hover:scale-105 transition-transform duration-300 mr-25 md:mr-10"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex  items-center gap-8">
        <ul className="hidden sm:flex gap-6 text-lg text-gray-700 font-medium ">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `px-3 py-1 rounded-md transition duration-300 ${
                isActive
                  ? "bg-green-500 text-white font-serif"
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

        {/* Profile Icon */}
        <div className="gap-4 flex items-center hover:bg-green-100 p-2 rounded-full cursor-pointer transition duration-300">
          <UserRound
            size={30}
            className="text-gray-700 hover:text-green-600 transition duration-300"
          />
          {/* <button onClick={() => setVisible(!visible)} className="sm:hidden">
            {visible ? <X size={28} /> : <Menu size={28} />}
          </button> */}
        </div>
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
  </div>
</div>

    </div>
  );
};

export default Navbar;
