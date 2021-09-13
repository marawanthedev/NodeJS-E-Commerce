const express = require("express");
const router = express.Router();
const errorCtrl = require("../controllers/error");
// use does genearlized match for url
// get / post is asbolute match url

router.use("/", errorCtrl.get404);

module.exports = router;
