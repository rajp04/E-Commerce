const Routes = require("express")
const router = Routes()
const messageController = require("../controller/messageController.js");

router.route("/message").post(messageController.message);
router.route("/getmessage/:id").get(messageController.getmessage);
router.route("/getmessagedata/:id").get(messageController.getmessagedata);

module.exports = router;