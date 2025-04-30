const db = require("../connection/db_connection");

class appointmentRepository {
    async update(id, dataToUpdate) {
        try {            
            const updateAppointment = await db("agendamentos")
            .where({ id })
            .update(dataToUpdate)
            .returning("*");
            return updateAppointment;
        } catch (error) {
            console.error("Erro ao atualizar agendamento no repositório:", error);
            throw error;
        };
    };

    async register(dataToUpdate) {

    };
    
    async getById(id) {
        try {
            const appointment = await db("agendamentos").where({ id }).first();
            return appointment;
        } catch (error) {
            console.error("Erro ao buscar agendamento por ID no repositório:", error);
            throw error;
        };
    };
};

module.exports = new appointmentRepository;