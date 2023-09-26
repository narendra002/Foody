const Restaurant = require("../Models/Restaurent");
const express = require("express");
const router = express.Router();
const verifyToken = require("./verifytoken");

// Middleware to check ownership
const checkOwnership = async (req, res, next) => {
  const restaurantId = req.params.id;

  try {
    const existingRestaurant = await Restaurant.findById(restaurantId);

    if (!existingRestaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    if (existingRestaurant.user.toString() !== req.userId) {
      return res.status(403).json({ error: 'You are not authorized to perform this action' });
    }

    req.restaurant = existingRestaurant;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all restaurants
router.get('/restaurent_all', async (req, res) => {
  try {
    const restaurent = await Restaurant.find();
    res.status(200).json(restaurent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a restaurant by name
router.get('/rs/:name', async (req, res) => {
  try {
    const name = req.params.name;
    const restaurant = await Restaurant.findOne({ restaurantName: name });
    
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    res.status(200).json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a Restaurant
router.post('/create_restaurant', verifyToken, async (req, res) => {
  try {
    const { restaurantName, description, address } = req.body;

    const existingRestaurant = await Restaurant.findOne({ restaurantName, description, address });

    if (existingRestaurant) {
      return res.status(400).json({ error: 'Restaurant with this information already exists' });
    }

    const newRestaurant = new Restaurant({
      restaurantName,
      description,
      address,
      user: req.userId,
    });

    await newRestaurant.save();
    res.status(201).json({ message: 'Restaurant registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update RS
router.put('/update_rs/:id', verifyToken, checkOwnership, async (req, res) => {
  const { restaurantName, description, address } = req.body;

  try {
    req.restaurant.restaurantName = restaurantName;
    req.restaurant.description = description;
    req.restaurant.address = address;

    await req.restaurant.save();

    res.status(200).json({ message: 'Restaurant updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a restaurant
router.delete('/delete_rs/:id', verifyToken, checkOwnership, async (req, res) => {
  try {
    await req.restaurant.remove();
    res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
