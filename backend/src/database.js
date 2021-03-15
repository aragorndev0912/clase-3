const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/images')
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log(err));