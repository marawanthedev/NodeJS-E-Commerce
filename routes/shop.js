const express = require("express");
const router = express.Router();
const shopCtrl = require("../controllers/shop");

// use does genearlized match for url
// get / post is asbolute match url
router.get("/", shopCtrl.getIndex);
router.get("/product-list", shopCtrl.getShop);
router.get("/product-detail", shopCtrl.getProduct);
router.get("/cart", shopCtrl.getCart);
router.get("/checkout", shopCtrl.getCheckout);

module.exports = router;
