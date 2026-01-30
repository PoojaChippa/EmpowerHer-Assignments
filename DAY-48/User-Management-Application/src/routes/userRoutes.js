const express = require("express");
const router = express.Router();
const validateUser = require("../validations/userValidation");
const userController = require("../controllers/userController");

router.post("/", validateUser, userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
