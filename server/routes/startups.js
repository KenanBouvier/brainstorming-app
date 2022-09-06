const express = require('express');
const router = express.Router();
const {
  getStartup,
  getStartups,
  createStartup,
  deleteStartup,
  updateStartup
} = require('../controllers/startupController');

//GET all startups
router.get('/',getStartups)

//get single startup
router.get('/:id',getStartup)

//POST new startup
router.post('/', createStartup);

//DELETE startup
router.delete('/:id',deleteStartup)  

//PATCH new startup
router.patch('/:id',updateStartup)  

module.exports = router;