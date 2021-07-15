const express = require("express");
const router = express.Router();

const BlogController = require("../controllers/blog.controller");

router.post("/", BlogController.postBlogDetails);
router.get("/", BlogController.getAllBlogs);
router.get("/:id", BlogController.getBlogbyId);

module.exports = router;
