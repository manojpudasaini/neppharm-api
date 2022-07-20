const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");

router.post("/", UserController.postUserDetails);
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserbyId);

module.exports = router;
