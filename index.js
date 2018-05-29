const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
var session      = require('express-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');

// mongoose.Promise = global.Promise;
// mongoose.connect(keys.mongoURI);
//const authRoutes = require('./routes/authRoutes');

//mongoose.Promise = global.Promise;
// mongoose.connect(keys.mongoURI);

// mongoose.createConnection(
//   'mongodb://localhost/book'
// );
require('./models/db');
const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());


//authRoutes(app);
require('./routes/authRoutes')(app);

// const routes = express();
// require('./routes/routes')
//const PORT = process.env.PORT || 8080;
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

