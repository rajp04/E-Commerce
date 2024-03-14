const Router = require("express");
const router = Router();
const addressController = require("../controller/addressController.js");

router.route("/address/:id").post(addressController.address);
router.route("/updateaddress/:id").put(addressController.adressUpdate);
router.route("/addressby/:id").get(addressController.addressByID);

module.exports = router;