const Router = require("express");
const router = Router();
const orderController = require("../controller/orderController.js");

router.route("/order").post(orderController.order);
router.route("/getorderdata/:id").get(orderController.getOrderData);
module.exports = router;