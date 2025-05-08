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

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { UserRound, UserX2Icon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 px-6 shadow-md rounded-md bg-gradient-to-r from-white via-green-100 to-green-100">
      {/* Logo Section */}
      <div>
        <Link to="/home">
          <img
            src={assets.logo}
            alt="Logo"
            className="w-36 hover:scale-105 transition-transform duration-300"
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
                  ? "bg-green-500 text-white font-serif"
                  : "hover:bg-green-100 hover:text-green-600 hover:font-serif"
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
                  : "hover:bg-green-100 hover:text-green-600"
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
                  : "hover:bg-green-100 hover:text-green-600"
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
                  : "hover:bg-green-100 hover:text-green-600"
              }`
            }
          >
            Contact
          </NavLink>
        </ul>

        {/* Profile Icon */}
        <div className="flex items-center hover:bg-green-100 p-2 rounded-full cursor-pointer transition duration-300">
          <UserRound
            size={30}
            className="text-gray-700 hover:text-green-600 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
