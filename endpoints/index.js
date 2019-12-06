const express = require("express");
const router = express.Router();
const ProductRouter = require("./product/product-route");
const ProfileRouter = require("./profile/profile-route");

ProductRouter(router);
ProfileRouter(router);

module.exports = router;
