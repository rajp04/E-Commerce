const Routes = require("express")
const router = Routes()
const cartController = require("../controller/cartController.js");

router.route("/addcart").post(cartController.addToCart);
router.route("/addsave").post(cartController.saveForLater);
router.route("/getcart/:id").get(cartController.getItemCart);
router.route("/getsave/:id").get(cartController.getItemSave);
router.route("/deletecart/:id").delete(cartController.removeItemCart);
router.route("/deletesave/:id").delete(cartController.removeItemSave);
router.route("/deleteallitem/:id").delete(cartController.removeAllItem);
router.route("/updateqty/:id").patch(cartController.updateQTY);

module.exports = router;