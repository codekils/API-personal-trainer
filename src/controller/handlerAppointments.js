const db = require("../connection/db_connection");
const {
    updateAppointmentService,
    registerAppointmentService
} = require("../services/appointmentServices.js");

const registerAppointment = async (req, res) => {
    try {
        const data = await registerAppointmentService(req);
        return res.status(201).json({ message: "Agendamento criado com sucesso!", data });
    } catch (error) {
        console.error("Erro no servidor");
        return res.status(error.statusCode || 500).json({ error: error.message });
    };
};

const allAppointment = async (req, res) => {
    try {
        const data = await db("agendamentos").select("*");

        const appointment = data.map(agendamento => {
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

        const data = await updateAppointmentService(req, res);
        return res.status(200).json({ message: "Agendamento atualizado com sucesso!", data });

    } catch (error) {

        console.error("Erro ao editar agendamento no Controller:", error);
        res.status(error.statusCode || 500).json({ error: error.message || "Error interno do servidor! " });

    };

};

const getAppointmentsByDate = async (req, res) => {
    const { data } = req.query;

    try {
        const appointmentByDate = await db("agendamentos").where({ data });

        if (!appointmentByDate || appointmentByDate == null) {
            return res.status(200).json({ message: `Não existe agendamento para ${data}` });
        };

        return res.status(200).json({ message: appointmentByDate });
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


