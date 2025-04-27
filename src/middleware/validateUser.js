const db = require("../connection/db_connection");

const validateEmailPhone = async (req, res, next) => {
    const { email, telefone } = req.body;
        
    const verifyData = await db("clientes").where({ email }).orWhere({telefone:telefone}).first();

    if (verifyData) {
        return res.status(400).json({message:"Email ou telefone já cadastrado!" });
    };
        
    next();    
};

module.exports = validateEmailPhone;