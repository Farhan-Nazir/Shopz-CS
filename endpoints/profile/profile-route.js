const endpoint = require('../endpointConstants');
function profileRouter(router) {
  router.route(endpoint.PROFILE).get((req, res) => {
    res.send('Profile API working.........');
  });
}

module.exports = profileRouter;
