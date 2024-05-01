const express = require('express');
const mongoose = require('./dbConnection');
const cardRoutes = require('./Routes/cardRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', cardRoutes);

app.listen(port, () => {
  console.log(`App listening to port ${port}`);
});
