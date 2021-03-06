const express = require('express');
const router = express.Router();
const orders = require('../controllers/orders.controller');

router.post('/orders', orders.createOrder);
router.get('/orders', orders.getOrders);
router.get('/order/:id', orders.getOrder);



module.exports = router;
