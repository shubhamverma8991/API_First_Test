const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductsTesting,
  createProduct,
  updateProduct,
} = require("../controllers/products");

// GET all products
router.route("/").get(getAllProducts);

// GET all products for testing
router.route("/testing").get(getAllProductsTesting);

// POST create a new product
router.route("/add").post(createProduct);

// PUT update a product by ID
router.route("/:id").put(updateProduct);

module.exports = router;
