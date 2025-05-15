const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
require("dotenv").config();
const bcrypt = require("bcrypt");

const bodyParser = require("body-parser");
const aiRoutes = require("./routes/aiRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const auth = require("./middleware/auth");
const signupRoutes = require("./routes/signup");
const loginRoutes = require("./routes/login");

const app = express();
// const PORT = process.env.PORT || 5000;

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

// Use the aiRoutes to handle API requests
app.use("/api", aiRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/signup", signupRoutes);
app.use("/api/login", loginRoutes);

app.get('/api/profile', auth, (req, res) => {
  res.send(`Welcome, user ID: ${req.user.userId}`);
});


mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  ).then(()=>console.log('MongoDB connected'))
  .catch(err=>console.log(err)
  )
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, ()=>console.log(`server running on port ${PORT}`)
  )