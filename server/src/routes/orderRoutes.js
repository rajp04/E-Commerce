const Router = require("express");
const router = Router();
const orderController = require("../controller/orderController.js");

router.route("/order").post(orderController.order);
router.route("/getorderdata/:id").get(orderController.getOrderData);
router.route("/getallorderdata").get(orderController.getAllOrderData);
router.route("/updatestatus/:id").patch(orderController.updateStatus);
module.exports = router;