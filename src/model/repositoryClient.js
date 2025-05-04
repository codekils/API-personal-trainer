const db = require("../connection/db_connection");

class clientRepository {

    async insert(newClientData) {
        try {
            const registedClientData = await db("clientes").insert(newClientData).returning("*");
            return registedClientData;
        } catch (error) {
            console.error("Erro ao inserir cliente no repositório:", error);
        };
    };

    async getByEmailPhone(email, phone){
        try {
            const foundClient = await db("clientes").where({ email }).orWhere({telefone:phone}).first();
            return foundClient;

        } catch (error) {
            console.error("Erro ao buscar email e telefone no repositório:", error);
        };
    }

    async getById(id) {
        try {
            const getById = await db("clientes").where({ id }).first();
            return getById
        } catch (error) {
            console.error("Erro ao buscar cliente pelo ID no repositório:", error);
            throw error;
        }
    }
}

module.exports = new clientRepository;