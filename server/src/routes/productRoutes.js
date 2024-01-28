const Routes = require("express")
const router = Routes()
const productController = require("../controller/productController.js");
const upload = require("../middlewares/multer.js");

router.route("/addproduct").post(upload.upload.single("image"), productController.addProduct);
router.route("/product").get(productController.product);
router.route("/updateproduct/:id").post(upload.upload.single("image"), productController.updateProduct);
router.route("/deleteproduct/:id").delete(productController.deleteProduct);

module.exports = router;