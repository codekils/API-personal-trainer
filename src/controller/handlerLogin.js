require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {

    const { email, password } = req.body;

    const data = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH); 
    
    if (!data) {
        return res.status(401).json({ message: "Login inválido! "});
    };

    if (email != process.env.ADMIN_EMAIL) {
        return res.status(401).json({ message: "Login inválido! "});
    }

    const token = await jwt.sign( {email},process.env.JWT_SECRET, { expiresIn:"1d"} );

    return res.status(200).json({ 
        message: "Login efetuado com sucesso", 
        token 
    });
};

module.exports = login;