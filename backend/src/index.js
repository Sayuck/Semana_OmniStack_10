const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://Roberto:robert0@cluster0-ly6uz.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

app.use(express.json());

app.use(routes);

// MongoDB (Não-relacional)
// app.post('/users', (request, response) => {
//   console.log(request.body);
  
// return response.json({ message: 'Olá mundo'});
// })
app.listen(3333);