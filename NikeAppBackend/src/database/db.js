const { MongoClient } = require('mongodb');

const url =  'mongodb+srv://varath:RWYCknCBBs8pUeJm@cluster0.xzclyru.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(url)

const database = client.db('test');
const products = database.collection('products');
const orders = database.collection('orders');

module.exports = {
    products,
    orders,
}
