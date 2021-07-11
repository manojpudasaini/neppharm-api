const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

router.post("/", productController.postProductDetails);

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getSelectedProduct);

module.exports = router;
