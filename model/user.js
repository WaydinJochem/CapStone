const db = require("../config/config");
const { hash, compare, hashSync } = require('bcrypt');
const { createToken, verifyToken } =
    require('../middleware/AuthenticateUser');
class Users {
    fetchUsers(req, res) {
        const query = `
        SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPwd, userURL
        FROM Users;
        `
        db.query(query,
            (err, results) => {
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    results
                })
            })
    }
    fetchUser(req, res) {
        const query = `
        SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPwd, userURL
        FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(query,
            (err, result) => {
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    result
                })
            })
    }
    login(req, res) {
        const { emailAdd, userPwd } = req.body
        // query
        const query = `
        SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPwd, userURL
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `
        // console.log(emailAdd);
        db.query(query, async (err, result) => {
            if (err) throw err
            if (!result?.length) {
                res.json({
                    status: res.statusCode,
                    msg: "You provided a wrong email."
                })
            } else {
                await compare(userPwd,
                    result[0].userPwd,
                    (cErr, cResult) => {
                        if (cErr) throw cErr
                        // Create a token
                        const token =
                            createToken({
                                emailAdd,
                                userPwd
                            })
                         console.log("Token generated", token);
                        // Verify the token
                        const decodedToken = verifyToken(token);

                        if (decodedToken) {
                            console.log('Decoded Token:', decodedToken);
                        } else {
                            console.error('Token verification failed');
                        }
                        // // Save a token
                        // res.cookie("LegitUser",
                        //     token, {
                        //     maxAge: 3600000,
                        //     httpOnly: true
                        // })
                        if (cResult) {
                            res.json({
                                msg: "Logged in",
                                token,
                                result: result[0]
                            })
                        } else {
                            res.json({
                                status: res.statusCode,
                                msg:
                                    "Invalid password or you have not registered"
                            })
                        }
                    })

            }
        })
    }

    async register(req, res) {
        const data = req.body;

        if (!data.userPwd) {
            return res.json({
                status: res.statusCode,
                msg: "Password is required"
            })
        }
        // Encrypt password
        data.userPwd = await hash(data.userPwd, 15)
        // Payload
        const user = {
            emailAdd: data.emailAdd,
            userPwd: data.userPwd
        }
        // Query
        const query = `
            INSERT INTO Users
            SET ?;
            `
        db.query(query,
            [data],
            (err) => {
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "You are now registered."
                })
            })
    }
    updateUser(req, res) {
        const data = req.body;
        if (data.userPwd) {
            console.log(data.userPwd);
            data.userPwd = hashSync(data.userPwd, 15)
        }

        const query = `
        UPDATE Users
        SET ?
        WHERE userID = ?
        `
        db.query(query,
            [data, req.params.id],
            (err) => {
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "The user record was updated."
                })
            })
    }
    deleteUser(req, res) {
        const query = `
        DELETE FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(query, (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "A user record was deleted."
            })
        })
    }
}
module.exports = Users;
