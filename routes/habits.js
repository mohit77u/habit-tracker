const express = require('express');
const router = express.Router();
const habitController = require('../controller/habitController')

// Dashboard GET 
router.get('/dashboard', habitController.dashboard);

// Handle Change View: Daily <--> Weekly 
router.post('/user-view', habitController.usersView)

// Dashboard Add Habit 
router.post('/dashboard', habitController.dashboardPost);

// Dashboard Add/Remove Habit to/from Favorites 
router.get("/favorite-habit", habitController.favHabitGet);

// Update status of habit completion 
router.get("/status-update", habitController.updateHabitStatus)

// Deleting a habit 
router.get("/remove", habitController.removeHabit);

// export whole router module
module.exports = router;