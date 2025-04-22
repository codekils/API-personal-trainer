const jwt = require("jsonwebtoken");
require("dotenv").config();

const validatorToken = async (req, res, next) => {
    
    const authorization = req.headers.authorization;
    const token = authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token mal formatado!" });
    };

    try {
        const usuario = await jwt.verify( token, process.env.JWT_SECRET );
        req.usuario = usuario;

        next();
    } catch (error) {
    return res.status(500).json({ message: "Token inválido ou expirado. " });
    };
};

module.exports = validatorToken;