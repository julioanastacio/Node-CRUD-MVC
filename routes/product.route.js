const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

router.get('/testar', product_controller.test);

router.get('/listOne', product_controller.listOne);
router.get('/listAll', product_controller.listAll);
router.post('/create', product_controller.create);
router.put('/update', product_controller.update);
router.delete('/delete', product_controller.delete);

module.exports = router;
