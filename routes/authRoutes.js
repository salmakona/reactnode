const passport = require('passport');

const fakeNews = [{
    id: '1',
    title: 'Mad owl chases car',
    teaser: 'Mad owl seen tormenting drivers in Morecambe',
    body: 'This is some body text regarding the news story of the mad owl tormenting drivers in Morecambe'
}, {
    id: '2',
    title: 'Owl stowaway',
    teaser: 'Despicable owl impersonates passenger to board flight to Luton',
    body: 'This is some body text regarding the news story of the owl making its way onto a domestic flight to luton'
}, {
    id: '3',
    title: 'Owl steals pork pie',
    teaser: 'This morning a rogue owl stole a pork pie from a shop in Swindon.',
    body: 'This is some body text regarding the news story of the owl stealing a pork pie from a shop in swindon'
}];

module.exports = app => {
    app.get(
      '/auth/google',
      passport.authenticate('google', { scope: ['profile', 'email'] })
    );

    app.get(
      '/auth/google/callback',
      passport.authenticate('google'),
      (req, res) => {
        res.redirect('/surveys');
      }
    );

    app.get('/api/logout', (req, res) => {
      req.logout();
      res.redirect('http://localhost:3000');
    });

    app.get('/api/logout2', (req, res) => {
          // res.status(200).send({
          //    data:''
          // })
         res.redirect('http://localhost:3000');
       });

    app.get('/api/current_user', (req, res) => {
      res.send(req.user)
    });

    app.get('/api/test', function(req, res){
        res.status(200).send({
            data: fakeNews
        })
      });

        app.get('/api/test/curent_user', function(req, res){
        res.status(200).send({
            data:
              {"_id":"5b0e25fb719ea7076c605b0a",
              "googleId":"108305369036942346820","__v":0}
            
          })
      });
}


