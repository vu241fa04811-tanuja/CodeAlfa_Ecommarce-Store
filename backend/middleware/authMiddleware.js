const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
        return res.status(401).json({ message: "No token, access denied" });
    }

    try {
        const token = authHeader.split(" ")[1]; // Bearer TOKEN

        const verified = jwt.verify(token, "SECRET_KEY");

        req.user = verified; // contains id + email
        next();

    } catch (err) {
        res.status(400).json({ message: "Invalid token" });
    }
};

module.exports = authMiddleware;