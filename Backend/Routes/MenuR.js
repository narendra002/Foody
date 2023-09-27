// routes/menus.js
const express = require('express');
const axios = require('axios');
const Menu =require('../Models/Menu');
const router = express.Router();
require('dotenv').config(); // Load environment variables

const API_KEY = process.env.SPOONACULAR_API_KEY; // Store your API key in an environment variable
const BASE_URL = process.env.SPOONACULAR_API;

// Middleware for handling errors
function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
}

// Middleware for validating request data
function validateMenuData(req, res, next) {
  // Implement request data validation here
  // Example: Check if menu data is valid before processing
  const { menuName, description, price, category, img, restaurant } = req.body;
  if (!menuName || !description || !price || !category || !img || !restaurant) {
    return res.status(400).json({ error: 'Invalid menu data' });
  }
  next();
}

// Route to fetch all menus
router.get('/menus', async (req, res,next) => {
  try {
    const response = await axios.get(`${BASE_URL}/food/menuItems/search`, {
      params: {
        apiKey: API_KEY,
      
      },
    });

    // Handle the response data here
    const menus = response.data;
    res.status(200).json(menus);
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});
// Create a new multiple menu items
router.post('/create_multiplemenus', validateMenuData, async (req, res, next) => {
  try {
    const menuArray = req.body; // Use "menuArray" instead of "MenuArray"

    // Create and save each menu item
    for (const menuData of menuArray) {
      const menu = new Menu(menuData);
      await menu.save();
    }

    res.status(200).json({ message: 'Multiple Menus Created' });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

// Get All Menu items
router.get('/get_allmenus', async (req, res, next) => {
  try {
    const menus = await Menu.find({});
    
    if (!menus || menus.length === 0) {
      // Handle the case where no menus are found
      return res.status(404).json({ error: 'No menus found' });
    }
    
    res.status(200).json(menus);
  } catch (error) {
    console.error('Error fetching menus:', error);
    next(error);
  }
});



// Get menu By name
router.get('/get_Menu/:name', async (req, res, next) => {
  try {
    const name = req.params.name; // Use req.params.name to access the 'name' parameter
    const menu = await Menu.find({ menuName: name });
    res.status(200).json({ menu });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

// Get menu By Category
router.get('/get_MenuByCategory/:category', async (req, res, next) => {
  try {
    const category = req.params.category; // Use req.params.category to access the 'category' parameter
    const categoryItem = await Menu.find({ category: category });
    res.status(200).json({ categoryItem });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

module.exports = router;
