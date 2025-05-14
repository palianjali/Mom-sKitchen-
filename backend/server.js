const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const aiRoutes = require('./routes/aiRoutes');
const recipeRoutes = require('./routes/recipeRoutes')
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all origins
app.use(cors());

app.use(bodyParser.json());

// Use the aiRoutes to handle API requests
app.use('/api', aiRoutes);
app.use('/api/recipes', recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
