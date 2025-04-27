const db = require("../connection/db_connection");

const registerAppointment = async (req, res,) => {
    const { cliente_id, data, hora_inicio, hora_fim, observacoes } = req.body;

    const seachClient = await db("clientes").where({id:cliente_id}).first(); 
    
    if (!seachClient) {
        return res.status(400).json({ message: "Cliente informado não existe!" }); 
    };

    const registerDbappointment = await db("agendamentos").insert({
        cliente_id,
        data,
        hora_inicio,
        hora_fim,
        observacoes
    }).returning("*");

    if (!registerDbappointment) {
        return res.status(400).json({ message: "Cliente informado não existe!" }); 
    };

    return res.status(201).json({ message: registerDbappointment });
};

const allAppointment = async (req, res) => {
    try {
        const data = await db("agendamentos").select("*");
        
        const appointment = data.map( agendamento => {
            const dataN = agendamento.data.toISOString().split("T")[0];
            return {
                 id: agendamento.id,
                 cliente_id: agendamento.cliente_id,
                 data: dataN,
                 hora_inicio: agendamento.hora_inicio,
                 hora_fim: agendamento.hora_fim,
                 Observações: agendamento.observacoes
            };
        });
        
        res.status(200).json({ appointment });
    } catch (error) {
        return res.status(400).json({ message: error });
    };
};

const editAppointment = async (req, res) => {;
    const { id } = req.query;
    const { data, hora_inicio, hora_fim, observacoes } = req.body;
    console.log(id);
    console.log({data, hora_inicio, hora_fim, observacoes});
        
    try {
        
        const dados = await db("agendamentos").where({id}).update({
            data, hora_inicio, hora_fim, observacoes
        }).returning("*");
    
        console.log(dados);
        
    
        return res.status(200).json({ message: dados });
    } catch (error) {
      console.log(error);
        
    };

};

const getAppointmentsByDate = async (req, res) => {
    const { data } = req.query;
        
    try {
        const appointmentByDate = await db("agendamentos").where({ data });
        console.log(appointmentByDate);
        
        if (!appointmentByDate || appointmentByDate == null) {
            return res.status(200).json({ message: `Não existe agendamento para ${data}`});    
        };

        return res.status(200).json({ message: appointmentByDate});
    } catch (error) {
        return res.status(400).json({ message: error });
    }
};

module.exports = {
    registerAppointment,
    editAppointment,
    allAppointment,
    getAppointmentsByDate
};


