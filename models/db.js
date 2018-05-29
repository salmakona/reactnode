const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect to MongoDB on localhost:27017
mongoose.connect('mongodb://localhost:27017/book', { useMongoClient: true });

// Create a model and insert a new doc
// const Test = mongoose.model('Test', new mongoose.Schema({ name: String }));
// Test.create({ name: 'Val' }).then(doc => console.log(doc));
