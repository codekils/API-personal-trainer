const {
    updateAppointmentService,
    registerAppointmentService,
    getAllAppointmentService,
} = require("../services/appointmentServices.js");

const registerAppointment = async (req, res) => {
    try {

        const data = await registerAppointmentService(req);

        return res.status(201).json({ message: "Agendamento criado com sucesso!", data });

    } catch (error) {

        console.error("Erro no servidor", error.message);

        return res.status(error.statusCode || 500).json({ error: error.message });
    };
};

const getAllAppointment = async (req, res) => {
    try {

        const dateAppoinment = await getAllAppointmentService();

        res.status(200).json({ dateAppoinment });

    } catch (error) {

        return res.status(400).json({ message: error.message });

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
    try {
        const response = await getAllAppointment(req);
        return res.status(200).jsnon({ message: "Agendamentos encontrados!", response });

    } catch (error) {

        console.error("Erro ao buscar agendamento pela data", error);
        res.status(error.statusCode || 500).json({ error: error.message || "Erro interno do servidor!" });
        
    };
};

module.exports = {
    registerAppointment,
    editAppointment,
    getAllAppointment,
    getAppointmentsByDate
};


