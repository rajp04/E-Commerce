const Routes = require("express")
const router = Routes()
const cartController = require("../controller/cartController.js");

router.route("/addcart").post(cartController.addToCart);
router.route("/getcart/:id").get(cartController.getItemCart);
router.route("/deletecart/:id").delete(cartController.removeItemCart);

module.exports = router;