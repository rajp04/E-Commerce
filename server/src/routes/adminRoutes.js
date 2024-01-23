const Router = require("express")
const router = Router();
const adminController = require("../controller/adminController")

router.route("/register").post(adminController.register)
router.route("/login").post(adminController.login)

module.exports = router