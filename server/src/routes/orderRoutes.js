const Router = require("express");
const router = Router();
const orderController = require("../controller/orderController.js");

router.route("/order").post(orderController.order);
module.exports = router;