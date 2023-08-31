const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser');
const { users, products, cart } = require('../model/index');

//get methods
routes.get('/products',(req, res)=>{
    products.fetchProducts(req, res)
});
routes.get('/products/:id',(req, res)=>{
    products.fetchProduct(req, res)
});

routes.get('/users',(req, res)=>{
    users.fetchUsers(req, res)
});
routes.get('/users/:id', (req, res)=>{
    users.fetchUser(req, res)
});
routes.get('')
//post methods
routes.post('/products',bodyParser.json(), (req, res)=>{
    products.addProduct(req, res)
});
routes.post('/users',bodyParser.json(), (req, res)=>{
    users.register(req, res)
});
routes.post('/login', bodyParser.json(), (req, res)=>{
    users.login(req, res)
});
//put methods
routes.put('/products/:id', bodyParser.json(), (req, res)=>{
    products.updateProduct(req, res)
});
routes.put('/users/:id', bodyParser.json(), (req, res)=>{
    users.updateUser(req, res)
});
//patch methods
routes.patch('/products/:id', bodyParser.json(),(req, res)=>{
    products.updateProduct(req, res)
});
routes.patch('/users/:id', bodyParser.json(),(req, res)=>{
    users.updateUser(req, res)
});
//delete methods
routes.delete('/products/:id', (req, res)=>{
    products.deleteProduct(req, res)
});
routes.delete('/users/:id', (req, res)=>{
    users.deleteUser(req, res)
});

module.exports = {
    express, routes
}