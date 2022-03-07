const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route');

// SIMULANDO CONEXÃO COM O BANCO DE DADOS
// const mongoose = require('mongoose');
// let url = 'mongodb://bd_user:abcd1234@ds111234.mlab.com:123213/smartphones';
// let mongoDB = process.env.MONGODB_URI || url;
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', product);
app.use('/products', product);

app.listen(8080, () => {
  console.log('Servidor na porta 8080 🔥');
});
