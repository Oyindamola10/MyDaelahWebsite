const {createCart,getCart} = require('../controllers/CartController')

router.post('/', createCart);
router.get('/', getCart)

module.exports = router;