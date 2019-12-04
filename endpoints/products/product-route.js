function productRouter(router) {
  router.route('/api/products').get((req, res) => {
    return res.send('Products API working.........');
  });
}

module.exports = productRouter;
