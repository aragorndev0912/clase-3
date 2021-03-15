const express = require('express');
const multer = require('multer');
const env = require('node-env-file');
const path = require('path');
const routes = require('./routes');
const morgan = require('morgan');
const uuid = require('uuid');
const cors = require('cors');
const app = express();

require('./database');

// Settings.
env(path.join(__dirname, '.env'));
app.set('port', process.env.PORT || 3000);

// Middlewares.
app.use(cors());
const storage = multer.diskStorage({
  filename: (req, file, cb, filename) => {
    cb(null, uuid.v4() + path.extname(file.originalname));
  },
  destination: path.join(__dirname, 'public/images')
});
app.use(multer({storage:storage}).single('image'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Routes.
app.use(routes.post);

// Static files.
app.use(express.static(path.join(__dirname, 'public')));

// Start server.
app.listen(app.get('port'), () => {
  console.log(`Server on port: ${app.get('port')}`);
});