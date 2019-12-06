const endpoint = require('../endpointConstants');
function productRouter(router) {
  router.route(endpoint.PRODUCT).get((req, res) => {
    return res.send('Products API working.........');
  });
}

module.exports = productRouter;
