const express = require("express");
const router = express.Router();
const shopCtrl = require("../controllers/shop");
const cartCtrl = require("../controllers/cart");

// use does generalized match for url
// get / post is abs match url
router.get("/", shopCtrl.getIndex);
router.get("/product-list", shopCtrl.getShop);
router.get("/product-detail", shopCtrl.getProduct);
router.get("/checkout", shopCtrl.getCheckout);
router.get("/orders", shopCtrl.getOrders);

// getting req param  adding : will treat it as a param not a path
router.get("/product-detail/:productId", shopCtrl.getProduct);

//cart
router.get("/cart", cartCtrl.getCart);
router.post("/cart", cartCtrl.postCart);
router.post("/cart/delete", cartCtrl.removeItem);
module.exports = router;
