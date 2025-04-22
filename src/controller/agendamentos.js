const db = require("../connection/db_connection");

const agendaRegister = async (req, res,) => {
    const { cliente_id, data, hora_inicio, hora_fim } = req.body;

    const dataRegister = await db("agendamentos").insert({
        cliente_id,
        data,
        hora_inicio,
        hora_fim
    }).returning("*");

    if (!dataRegister) {
        return res.status(400).json({ message: "Ocorreu um erro!" }); 
    };

    return res.status(201).json({ dataRegister });
};

module.exports = {
    agendaRegister
}


