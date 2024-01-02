const { createProduct, getProducts, updateProduct, deleteProduct, searchProduct, createCart,getCart,deleteCart} = require('../controllers/productsController');

const router = require('express').Router();

router.post('/', createProduct);
// router.post('/multiples', addMultiples);
router.post('/', createCart);
router.get('/', getCart)
router.get('/', getProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.delete('/:id', deleteCart);
router.get('/:id', searchProduct);

module.exports = router;