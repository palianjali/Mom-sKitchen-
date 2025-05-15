// const express = require('express');
// const User = require('../models/User');
// const bcrypt = require('bcrypt');
// const router = express.Router();

// router.post('/', async (req, res) => {
//     const { fullname, email, password } = req.body;

//     try {
//         //check if user already exists

//         const existinguser = await User.findOne({ email });
//         if (existinguser) {
//             return res.status(400).json({
//                 error: 'user already exists'
//             });
//         }
        
//     // 🔐 Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10); // 10 salt rounds

//         //create mew user
//         const newUser = new User({fullname, email, password:hashedPassword});
//         await newUser.save();

//         res.status(201).json({message: 'Signup successful! Please check your email to verify your account.'});
//     }catch(err){
//         res.status(500).json({error: "server error"});
//     }
// });

// module.exports = router;

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const axios = require("axios");
require("dotenv").config();

const aiRoutes = require("./routes/aiRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const signupRoutes = require("./routes/signup");
const loginRoutes = require("./routes/login");
const auth = require("./middleware/auth");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/api", aiRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/signup", signupRoutes);
app.use("/api/login", loginRoutes);

// Protected profile route
app.get('/api/profile', auth, (req, res) => {
  res.send(`Welcome, user ID: ${req.user.userId}`);
});

// External API call to your deployed Render API
app.get('/api/external', async (req, res) => {
  try {
    const response = await axios.get("https://mom-skitchen-02.onrender.com/api/recipes");
    res.json(response.data);
  } catch (error) {
    console.error("Error calling external API:", error.message);
    res.status(500).json({ error: "Failed to fetch from external API" });
  }
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
