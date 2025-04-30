const db = require("../connection/db_connection");
const appointmentRepository = require("../model/repositoryAppointment");

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

const editAppointment = async (req, res) => {        
    try {
        const appointmentId = parseInt(req.query.id);
        const updateData = req.body;

        const updateAppointment = await appointmentRepository.updateAppointment(updateData,appointmentId);
        
        return res.status(200).json({ updateAppointment });
    } catch (error) {
      console.error("Erro ao editar agendamento no Controller:", error);
      res.status(error.statusCode || 500).json({ error: error.message || "Error interno do servidor! "});        
    };

};

const getAppointmentsByDate = async (req, res) => {
    const { data } = req.query;
        
    try {
        const appointmentByDate = await db("agendamentos").where({ data });
        
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


