const repositoryClient = require("../model/repositoryClient");

async function newRegisterClient(req) {
    try {
        const newClientData = req.body;

        const registedClientData = await repositoryClient.insert(newClientData);

        if (!registedClientData || registedClientData === undefined) {
            const error = new Error("Erro ao registrar novo cliente!");
            error.statusCode = 400;
            throw error;
        };

        return registedClientData;
    } catch (error) {
        console.error("Ocorreu um erro ao registrar um novo cliente!", error.message);
        throw error;
    };
};

module.exports = {
    newRegisterClient,
}