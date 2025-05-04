const db = require("../connection/db_connection");

class ClientRepository {

    async registerClient(newClientData) {
        try {

            const registedClientData = await db("clientes").insert(newClientData).returning("*");
            return registedClientData;
            
        } catch (error) {
            console.error("Erro ao inserir cliente no repositório:", error.message);
        };
    };

    async getByEmailPhone(email, telefone) {
        try {

            const foundClient = await db("clientes").where({ email }).orWhere({ telefone }).first();
            return foundClient;

        } catch (error) {
            console.error("Erro ao buscar email e telefone no repositório:", error.message);
        };
    }

    async getById(id) {
        try {
            const getById = await db("clientes").where({ id }).first();
            return getById
        } catch (error) {
            console.error("Erro ao buscar cliente pelo ID no repositório:", error.message);
            throw error;
        }
    }
}

module.exports = new ClientRepository;