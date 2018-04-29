const express = require('express');
const mongoose = require('mongoose');
require('./models/User');
//const authRoutes = require('./routes/authRoutes');
require('./services/passport');
mongoose.createConnection(
  'mongodb://gugly:gugly@ds257579.mlab.com:57579/reactnode'
);

const app = express();
//authRoutes(app);

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT);
