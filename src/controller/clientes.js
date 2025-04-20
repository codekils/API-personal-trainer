const db = require('../connection/db_connection');

const registerClient = async (req, res) => {
    const { nome, telefone, email, objetivo, endereço } = req.body;

    try {

        const data = await db("clientes").insert({
            nome,
            telefone,
            email,
            objetivo,
            endereço
        }).returning("*");

        if (!data) {
            return res.status(401).json({message: "Ocorreu um erro"});
        }

        return res.status(201).json({ message: "register client sucesso!" })

    } catch (error) {
        return res.status(400).json({ message: error })
    }
};

module.exports = {
    registerClient
};