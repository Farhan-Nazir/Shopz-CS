const mongoose = require("../../database/db_conn");
let productSchema = new mongoose.Schema({});
let productData = mongoose.model("product", productSchema);

function productRouter(router) {
  router.route("/api/product").get((req, res) => {
    productData.find({}, (err, data) => {
      if (err) throw err;
      return res.json(data);
    });
  });
}

module.exports = productRouter;
