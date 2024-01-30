const Router = require("express");
const router = Router();
const userController = require("../controller/userController.js");
const upload = require("../middlewares/multer.js")

router.route("/register").post(userController.register);
router.route("/login").post(userController.login);
router.route("/updateuser/:id").patch(userController.updateUser);
router.route("/updatepassword/:id").patch(userController.updatePassword);
router.route("/deleteuser/:id").delete(userController.deleteUser);
router.route("/alluserdata").get(userController.usersData);
router.route("/userdata/:id").get(userController.userByID);
router.route("/avatar/:id").patch(upload.upload.single('avatar'), userController.avatar);
router.route("/userblock/:id").patch(userController.userBlock);

module.exports = router;
