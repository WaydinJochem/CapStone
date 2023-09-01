const { sign, verify } = require('jsonwebtoken')
require("dotenv").config()
function createToken(user) {
    return sign({
        emailAdd: user.emailAdd,
        userPwd: user.userPwd
    },
        process.env.SECRET_KEY,
        {
            expiresIn: '1h'
        })
}

function verifyToken(token) {
    try {
        const decoded = verify(token, process.env.SECRET_KEY);
        return decoded;
    }
    catch (err) {
        return null;
    }
}
module.exports = {
    createToken,
    verifyToken
}