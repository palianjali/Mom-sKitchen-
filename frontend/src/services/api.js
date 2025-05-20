import axios from 'axios';

const API = axios.create({ baseURL: 'https://mom-skitchen-02.onrender.com/api/recipes' });

export const fetchDailyRecipe = () => API.get('/daily');
