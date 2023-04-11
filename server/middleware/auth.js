const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401);

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRECT)
        console.log(decoded);
        req.id = decoded.id;
        next()
    } catch (err) {
        console.log(err);
        return res.status(403);
    }
}
module.exports = verifyToken;