const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const userController = require('./middleware');

const port = 3000;
const app = express();

// Connect to MongoDB Database.
mongoose.connect('mongodb+srv://WT-test:test@soloproject.vyqpe.mongodb.net/soloproject?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('Connection has been made.');
}).on('error', (err) => {
  console.log('Error:', err);
});

app.use(bodyParser.json());

app.post('/api/signup', userController.createUser, (req, res) => {
  res.json('Successful.');
})

app.get('/api/success', userController.getAllUsers, (req, res) => {
  res.send(res.locals.users);
})


// Global Error Handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})