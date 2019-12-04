function profileRouter(router) {
  router.route('/api/profile').get((req, res) => {
    res.send('Profile API working.........');
  });
}

module.exports = profileRouter;
