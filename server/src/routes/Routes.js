const Router = require("express");
const userController = require("../controller/User.js");

const router = Router();

router.route("/register").post(userController.register);
router.route("/login").post(userController.login);
router.route("/profile/:id").get(userController.profile);
router.route("/updateprofile/:id").post(userController.updateProfile);
router.route("/changepassword/:id").post(userController.changePassword);
router.route("/userdata").get(userController.usersData);
module.exports = router;
