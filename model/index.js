const Products = require('./product');
const Users = require('./user');
const Cart = require('./cart');
// Export all objects
module.exports = {
    products: new Products(),
    users: new Users(),
    cart: new Cart(),
}