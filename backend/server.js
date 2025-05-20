const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

// const aiRoutes = require("./routes/aiRoutes");
const aiRoutes = require('./routes/aiRoutes')
const recipeRoutes = require("./routes/recipeRoutes");
const auth = require("./middleware/auth");
const signupRoutes = require("./routes/signup");
const loginRoutes = require("./routes/login");
const contactRoutes = require('./routes/contactRoutes')

const app = express();
// Use this to allow both localhost (for dev) and Vercel (for production)
const allowedOrigins = ['http://localhost:5174', 'https://mom-s-kitchen-eight.vercel.app'];
// ✅ Fix CORS: Allow Vercel frontend explicitly
app.use(cors({
  origin: "https://mom-s-kitchen-eight.vercel.app", // Frontend domain
  credentials: true,  
}));

app.use(express.json());
app.use(bodyParser.json());

// API routes
app.use("/api", aiRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/signup", signupRoutes);
app.use("/api/login", loginRoutes);
app.use('/api/contact', contactRoutes);

// Protected route example
app.get('/api/profile', auth, (req, res) => {
  res.send(`Welcome, user ID: ${req.user.userId}`);
});

// MongoDB connection
mongoose.connect(
  process.env.URI,
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
