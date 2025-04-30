const db = require("../connection/db_connection");

class clientRepository {
    async insert(dataToInsert) {
        try {
            const insertClient = await db("clientes").insert(dataToInsert).returning("*");
            return insertClient;
        } catch (error) {
            console.error("Erro ao inserir cliente no repositório:", error);
        }
    };

    async getByEmailPhone(email, phone){
        try {
            const verifyData = await db("clientes").where({ email }).orWhere({telefone:phone}).first();

            if (verifyData) {
                return res.status(400).json({message:"Email ou telefone já cadastrado!" });
            };

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