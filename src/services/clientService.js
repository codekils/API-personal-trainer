const ClientRepository = require("../model/repositoryClient");

async function registerClientService(req) {
    try {
        const newClientData = req.body;

        const customerExists = await ClientRepository.getByEmailPhone(newClientData.email, newClientData.telefone);

        if (customerExists) {
            const error = new Error("Já existe um cliente com email ou telefone informado!");
            error.statusCode = 400;
            throw error;
        };

        const registeredClientData = await ClientRepository.registerClient(newClientData);

        if (!registeredClientData || registeredClientData === undefined) {
            const error = new Error("Erro ao registrar novo cliente!");
            error.statusCode = 400;
            throw error;
        };

        return registeredClientData;
    } catch (error) {
        console.error("Ocorreu um erro ao registrar um novo cliente!", error.message);
        throw error;
    };
};

module.exports = {
    registerClientService,
}