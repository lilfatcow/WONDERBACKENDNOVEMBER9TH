const express = require('express');
const { createPaymentLink, getPaymentLink, expirePaymentLink } = require('../controllers/paymentLinks');

const router = express.Router();

router.post('/', createPaymentLink);
router.get('/:id', getPaymentLink);
router.post('/:id/expire', expirePaymentLink);

module.exports = router;