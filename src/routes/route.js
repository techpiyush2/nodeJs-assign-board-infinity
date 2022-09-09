const express = require('express');
const AllControllers = require('../controllers/allControllers')

const router = express.Router();


router.post('/age', AllControllers.getAge);
router.get('/vegetables', AllControllers.getVegetables);
router.post('/metrics', AllControllers.getmetrics);


module.exports = router;