const Routes = require("express")
const router = Routes()
const productController = require("../controller/productController.js");
const upload = require("../middlewares/multer.js");

router.route("/addproduct").post(upload.upload.single("image"), productController.addProduct);
router.route("/product").get(productController.product);

module.exports = router;