let Product = require('../models/products.model');
let axios = require('axios');

exports.test = function (req, res) {
  res.send('Teste ao Controller!');
};

exports.listAll = function (req, res) {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.listOne = function (req, res) {
  axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.create = function (req, res) {
  axios
    .post(
      'https://jsonplaceholder.typicode.com/posts',
      JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.update = function (req, res) {
  axios
    .put(
      'https://jsonplaceholder.typicode.com/posts/1',
      JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.delete = function (req, res) {
  axios
    .delete('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
