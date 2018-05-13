const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  // the callback after google has authenticated the user
  app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/profile',
      failureRedirect: '/'
    })
  );
};



// module.exports = router;
// router.post('/users/create',    usersController.create);
// router.get('/users',    usersController.showUser);
// router.post('/users/auth',    usersController.authenticate);
