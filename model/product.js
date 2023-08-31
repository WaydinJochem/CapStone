const db = require("../config/config");

class Products {
    //Show all products
    fetchProducts(req, res) {
        const query = `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl
        FROM Products;
        `
        db.query(query, (err, results) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    //Show specified product
    fetchProduct(req, res) {
        const query = `
        SELECT prodID, prodName, quantity, amount, Category, prodUrl
        FROM Products
        WHERE prodID = ${req.params.id};
        `

        db.query(query, (err, results) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    //Add products
    addProduct(req, res) {

        const query = `
            INSERT INTO Products
            SET ? ;
        `
        db.query(query,[req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Product has been successfully added"
            })
        })
    }
    //Change Product Information
    updateProduct(req, res) {
        const query = `
        UPDATE Products
        SET ?
        WHERE prodID = ?;
        `
        db.query(query,  [req.body, req.params.id], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Product has been successfully updated"
            })
        })
    }
    //Delete Product
    deleteProduct(req, res) {
        const query = `
        DELETE FROM Products
        WHERE prodID = ${req.params.id};
        `
        db.query(query, (err)=>{
            if(err)throw err
            res.json({
                status: res.statusCode,
                msg: "A product has been successfully deleted"
            })
        })
    }
}

module.exports = Products;