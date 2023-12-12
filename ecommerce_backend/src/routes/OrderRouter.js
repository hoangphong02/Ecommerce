const express = require("express");
const router = express.Router();
const orderController = require("../controllers/OrderController");
const { authUserMiddleWare } = require("../MiddleWare/authMiddleWare");

router.post("/create", authUserMiddleWare, orderController.createOrder);
module.exports = router;
