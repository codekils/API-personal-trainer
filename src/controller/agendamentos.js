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

const listAgenda = async (req, res) => {
    try {
        const data = await db("agendamentos").select("*");
        
        const dataFormated = data.map( agendamento => {
            const dataN = agendamento.data.toISOString().split("T")[0];
            return {
                 id: agendamento.id,
                 cliente_id: agendamento.cliente_id,
                 data: dataN,
                 hora_inicio: agendamento.hora_inicio,
                 hora_fim: agendamento.hora_fim
            }
        });
        console.log(data);
        
        res.status(200).json({ dataFormated });
    } catch (error) {
        return res.status(400).json({ message: error });
    };
};

const listAgendaDay = async (req, res) => {
    const data = "2025-04-30"; 
    console.log(dados);
};

module.exports = {
    agendaRegister,
    listAgendaDay,
    listAgenda
};


