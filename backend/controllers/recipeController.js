const axios = require('axios');
const { getDayName } = require('../utils/dayUtils');

// 🧠 Helper: Parse a block of text into title, ingredients, and instructions
const parseRecipeBlock = (block) => {
  const lines = block
    .split('\n')
    .map(l => l.trim())
    .filter(l => l);

  const title = lines[0]
    .replace(/^\d+\.?\s*/, '') // Remove leading number
    .replace(/\*{1,2}/g, '');

  const ingIdx = lines.findIndex(l => /ingredients[:]?/i.test(l));
  const instrIdx = lines.findIndex(l => /instructions[:]?/i.test(l));

  const ingredients = lines
    .slice(ingIdx + 1, instrIdx)
    .map(l => l.replace(/^[-\*\d\.\s]*/, ''));

  const instructions = lines
    .slice(instrIdx + 1)
    .map(l => l.replace(/^[-\*\d\.\s]*/, ''));

  return { title, ingredients, instructions };
};

// 📸 Helper: Get image for a recipe using Google Custom Search
const fetchImageFor = async (title) => {
  try {
    const res = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
      params: {
        key: process.env.GOOGLE_API_KEY,
        cx: process.env.GOOGLE_CX,
        q: `${title} Indian food`,
        searchType: 'image',
        num: 1,
      },
    });
    return res.data.items?.[0]?.link || null;
  } catch (err) {
    console.warn(`Image fetch failed for "${title}"`);
    return null;
  }
};

// ✂️ Helper: Remove intro and split recipe blocks
const splitIntroAndRecipes = (rawText) => {
  const cleanText = rawText.replace(/^[\s\S]*?(?=\n?1\.)/, ''); // Remove everything before "1."
  const recipeBlocks = cleanText
    .split(/\n(?=\d+\.)/)
    .filter(b => b.trim());

  return recipeBlocks;
};

// 🔥 Main Controller: Get Daily Recipes
exports.getDailyRecipe = async (req, res) => {
  try {
    const day = getDayName();

    const prompt = `
Suggest exactly 4 traditional Indian recipes suitable for a ${day} meal.
Format:
1. Recipe Name
Ingredients:
- ingredient 1
- ingredient 2
Instructions:
- step 1
- step 2
    `.trim();

    const geminiRes = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }], role: "user" }],
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    const rawText = geminiRes.data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

    if (!rawText) {
      return res.status(502).json({ error: "Gemini API returned empty content" });
    }

    const recipeBlocks = splitIntroAndRecipes(rawText);

    const recipes = await Promise.all(
      recipeBlocks.map(async (block) => {
        const parsed = parseRecipeBlock(block);
        const image = await fetchImageFor(parsed.title);
        return { ...parsed, image };
      })
    );

    res.json({ day, recipes });
  } catch (error) {
    console.error("Daily Recipe Error:", error.response?.data || error.message || error);
    res.status(500).json({ error: "Internal server error" });
  }
};