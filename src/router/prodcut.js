const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");

router
  .route("/api/product")
  .get(productController.index)
  .post(productController.addProduct);
router.put("/api/product/:id", productController.updateProduct);
router.delete("/api/product/:id", productController.deleteProduct);

module.exports = router;
