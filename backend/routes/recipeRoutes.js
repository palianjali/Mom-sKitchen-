const express = require('express');
const { getDailyRecipe } = require('../controllers/recipeController');
const router = express.Router();

router.get('/daily', getDailyRecipe);

module.exports = router;