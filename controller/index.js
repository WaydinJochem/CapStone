const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser');
const { users, products, cart } = require('../model/index');

//get methods
routes.get('/items', (req, res) => {
    products.fetchProducts(req, res)
});
routes.get('/items/:id', (req, res) => {
    products.fetchProduct(req, res)
});

routes.get('/users', (req, res) => {
    users.fetchUsers(req, res)
});
routes.get('/users/:id', (req, res) => {
    users.fetchUser(req, res)
});
routes.get('/user/:id/carts', (req, res) => {
    cart.fetchItems(req, res)
});
//post methods
routes.post('/items', bodyParser.json(), (req, res) => {
    products.addProduct(req, res)
});
routes.post('/register', bodyParser.json(), (req, res) => {
    users.register(req, res)
});
routes.post('/login', bodyParser.json(), (req, res) => {
    users.login(req, res)
});
routes.post('/user/:id/cart', bodyParser.json(), (req, res) => {
    cart.addItem(req, res)
});
//put methods
routes.put('/items/:id', bodyParser.json(), (req, res) => {
    products.updateProduct(req, res)
});
routes.put('/users/:id', bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
});
routes.put('/user/:id/cart/:id', bodyParser.json(), (req, res)=>{
    cart.updateItem(req, res)
});
//patch methods
routes.patch('/items/:id', bodyParser.json(), (req, res) => {
    products.updateProduct(req, res)
});
routes.patch('/users/:id', bodyParser.json(),(req, res)=>{
    users.updateUser(req, res)
});
routes.patch('/user/:id/cart/:id', bodyParser.json(), (req, res)=>{
    cart.updateItem(req, res)
});
//delete methods
routes.delete('/items/:id', (req, res) => {
    products.deleteProduct(req, res)
});
routes.delete('/users/:id', (req, res) => {
    users.deleteUser(req, res)
});
routes.delete('/user/:id/cart/:id', (req, res)=>{
    cart.deleteItem(req, res)
});
module.exports = {
    express, routes
}