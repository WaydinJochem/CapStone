const db = require("../config/config");


class Cart {
    //Show all cart items
    fetchItems(req, res) {
        const query = `
        SELECT  userID, prodID, prodName, quantity, amount, prodURL
        FROM Cart;
        `
        db.query(query, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }

    //Show single item
    fetchItem(req, res) {
        const query = `
        SELECT  userID, prodID, prodName, quantity, amount, prodURL
        FROM Cart
        WHERE prodID = ${req.params.id};
        `
        db.query(query, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    //Add to Cart
    addItem (req, res) {
        const query = `
        INSERT INTO Cart
        SET ?;
        `

        db.query(query, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Item successfully added to cart"
            })
        })
    }
    //Delete item from Cart
    deleteItem(req, res) {
        const query = `
        DELETE FROM Cart
        WHERE prodID = ${req.params.id};
        `
        db.query(query, (err)=>{
            if(err) throw err,
            res.json({
                status: res.statusCode,
                msg: "Item has been deleted"
            })
        })
    }
    //Edit existing product
    updateItem (req, res) {
        const query = `
        UPDATE Cart
        SET ? 
        WHERE prodID = ?
        `
        db.query(query, [req.body, req.params.id], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Product has been updated"
            })
        })
    }
}

module.exports = Cart