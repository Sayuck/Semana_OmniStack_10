const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://Roberto:robert0@cluster0-ly6uz.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

//app.use(cors({ origin: 'http://localhost:3000' }));// para utilizar apenas localmente

app.use(cors());
app.use(express.json());
app.use(routes);


// MongoDB (Não-relacional)
// app.post('/users', (request, response) => {
//   console.log(request.body);
  
// return response.json({ message: 'Olá mundo'});
// })


//depois de fazer o front end receber os dados dar um
// "yarn add cors" para o node deixar alterações externas 
//já que são servidores diferentes 
app.listen(3333);