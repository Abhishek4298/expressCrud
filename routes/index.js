const express = require("express");

const userController = require("../controller/userController");
const userControllerSecond = require("../controller/userControllerSecond");

const userValidate = require("../validator/userValidate");

const router = express.Router();

router.get("/list", userController.list);

router.post("/insert", userValidate.insert, userController.insert);

router.get("/getById/:id", userController.getById);

router.delete("/remove/:id", userControllerSecond.remove);

router.put("/update/:id", userControllerSecond.update);

module.exports = router;
