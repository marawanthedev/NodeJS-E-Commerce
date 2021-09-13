const express = require("express");
const adminCtrl = require("../controllers/admin");
const router = express.Router();

router.post("/add", adminCtrl.postAddProduct);

router.get("/add", adminCtrl.getAddProduct);

router.get("/products", adminCtrl.getAdminProducts);

module.exports = router;
