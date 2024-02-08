const {createCart,getCart, deleteCart} = require('../controllers/CartController')

const router = require('express').Router();

router.post('/', createCart);
router.get('/', getCart);
router.delete('/:id', deleteCart);

module.exports = router;