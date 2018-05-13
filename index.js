const express = require('express');
const mongoose = require('mongoose');
require('./models/User');
//const authRoutes = require('./routes/authRoutes');
require('./services/passport');
mongoose.createConnection(
  'mongodb://localhost/test'
);

////'mongodb://gugly:gugly@ds121960.mlab.com:21960/reactnode'

const app = express();
//authRoutes(app);

require('./routes/authRoutes')(app);


// const routes = express();

// require('./routes/routes')


const PORT = process.env.PORT || 8080;
app.listen(PORT);
