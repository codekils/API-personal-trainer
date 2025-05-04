    const db = require("../connection/db_connection");

    class appointmentRepository {
        // Atualiza um agendamento
        async update(id, newAppointmentData) {
            try {
                const appointmentData = await db("agendamentos")
                    .where({ id })
                    .update(newAppointmentData)
                    .returning("*");
                return appointmentData;
            } catch (error) {
                console.error("Erro ao atualizar agendamento no repositório:", error);
                throw error;
            };
        };
        // Buscar agendamento pelo id do agendamento
        async getById(id) {
            try {
                const appointment = await db("agendamentos").where({ id }).first();
                return appointment;
            } catch (error) {
                console.error("Erro ao buscar agendamento por ID no repositório:", error);
                throw error;
            };
        };
        // Buscar cliente pelo id do cliente
        async getByIdClient(cliente_id) {
            try {
                const client = await db("clientes").where({ id: cliente_id }).first();
                return client
            } catch (error) {
                console.error("Erro ao buscar cliente por ID no repositório", error.message)
                throw error;
            };
        };
        // Registrar um agendamento
        async registerAppointment(dataToUpdate) {
            try {
                const insertAppointment = await db("agendamentos").insert(dataToUpdate).returning("*");
                return insertAppointment;
            } catch (error) {
                console.error("Erro ao registrar agendamento!", error.message);
                throw error;
            };
        };
        // Buscar todos os agendamentos
        async getAllAppointments() {
            try {
                const allAppointments = await db("agendamentos").select("*");          
                return allAppointments;
            } catch (error) {
                console.error("Erro ao buscar todos os agendamentos!", error.message);
                throw error;
            };
        };
        // Buscar todos os agendamentos pela data
        async getAppointmentByDate(data) {
            try {
                const appointmentByDate = await db("agendamentos").where({ data });
                return appointmentByDate;
            } catch (error) {
                console.error("Erro ao buscar todos os agendamentos pela data", error.message);
                throw error;
            };
        };
    };

    module.exports = new appointmentRepository;