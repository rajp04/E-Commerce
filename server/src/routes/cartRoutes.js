const Routes = require("express")
const router = Routes()
const cartController = require("../controller/cartController.js");

router.route("/addcart").post(cartController.addToCart);

module.exports = router;