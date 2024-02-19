const Routes = require("express")
const router = Routes()
const productController = require("../controller/productController.js");
const upload = require("../middlewares/multer.js");

router.route("/addproduct").post(upload.upload.single("image"), productController.addProduct);
router.route("/product").get(productController.product);
router.route("/updateproduct/:id").patch(upload.upload.single("image"), productController.updateProduct);
router.route("/deleteproduct/:id").delete(productController.deleteProduct);
router.route("/getproduct/:id").get(productController.getProduct);
router.route("/updateqty/:id").patch(productController.updateQTY);

module.exports = router;