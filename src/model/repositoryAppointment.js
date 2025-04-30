const db = require("../connection/db_connection");

class appointmentRepository {
    // Atualiza um agendamento
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
    // Busca agendamento pelo id do agendamento
    async getById(id) {
        try {
            const appointment = await db("agendamentos").where({ id }).first();
            return appointment;
        } catch (error) {
            console.error("Erro ao buscar agendamento por ID no repositório:", error);
            throw error;
        };
    };
// Busca cliente pelo id do cliente
    async getByIdClient(cliente_id) {
        try {
            const client = await db("clientes").where({id:cliente_id}).first();
            return client
        } catch (error) {
            console.error("Erro ao buscar cliente por ID no repositório", error.message)
            throw error;
        };
    };
    // Registra um agendamento
    async registerAppointment(dataToUpdate) {
        try {
            const insertAppointment = await db("agendamentos").insert(dataToUpdate).returning("*");
            return insertAppointment;
        } catch (error) {
            console.error("Erro ao registrar agendamento!", error.message);
            throw error;
        };
    };


};

module.exports = new appointmentRepository;