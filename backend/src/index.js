const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const http = require('http');
const {setupWebsocket} = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

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

//depois de fazer o front end receber os dados dar um
// "yarn add cors" para o node deixar alterações externas 
//já que são servidores diferentes 
server.listen(3333);