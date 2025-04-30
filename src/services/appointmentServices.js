const db = require("../connection/db_connection");
const appointmentRepository = require("../model/repositoryAppointment");

async function updateAppointmentService(req) {
    try {
        const appointmentId = parseInt(req.query.id);
        const updateData = req.body;

        const getByAppointment = await appointmentRepository.getById(appointmentId);
        if (getByAppointment === undefined || !getByAppointment) {
            const error = new Error("Agendamento não encontrado!");
            error.statusCode = 404;
            throw error;
        };

        const updateAppointment = await appointmentRepository.update(appointmentId, updateData);
        if (updateAppointment === undefined || !updateAppointment) {
            const error = new Error("Erro ao atualizar o agendamento!");
            error.statusCode = 500;
            throw error;
        };

    } catch (error) {
        console.error("Erro ao verificar se cliente existe!", error.message);
        throw error;
    };
};

async function registerAppointmentService(req) {

    const id = parseInt(req.body.cliente_id);
    const dataToUpdate = req.body;


    const getByClient = await appointmentRepository.getByIdClient(id);
    if (getByClient === undefined || !getByClient) {
        const error = new Error("Erro ao buscar cliente!");
        error.statusCode = 404;
        throw error;
    };

    const registerAppointment = await appointmentRepository.registerAppointment(dataToUpdate);    
    if (registerAppointment === undefined || !registerAppointment) {
        const error = new Error("Erro ao registrar agendamento!");
        error.statusCode = 400;
        throw error;
    };

};

module.exports = {
    updateAppointmentService,
    registerAppointmentService
};