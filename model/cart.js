const db = require("../config/config");


class Cart {
    fetchCart(req, res) {
        const query = `SELECT Cart.cartID, Products.prodName AS prodName, Products.amount, Products.quantity, Products.prodUrl FROM Cart JOIN Products ON Cart.prodID = Products.prodID WHERE Cart.userID = ${req.params.id};`
        db.query(query, (err, results) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }

    addToCart(req, res) {
        const query = `INSERT INTO Cart ?;`
        db.query(query, data, (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "Product has been successfully added"
            })
        })
    }

    //add something to cart
    RemoveItem(req, res) {
        const query = `DELETE FROM Cart WHERE cartID = ${req.params.id}`
        db.query(query, (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "A product has been successfully deleted"
            })
        })
    }
    clearCart(req, res) {
        const query = `DELETE FROM Cart WHERE userID = ?`
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "Cart Cleared"
            })
        })
    }
    updateItems(req, res) {
        const query = `UPDATE Cart SET ? WHERE cartID = ?;`
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "A product has been successfully updated"
            })
        })
    }
}

module.exports = Cart