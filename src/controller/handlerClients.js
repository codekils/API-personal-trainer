const { registerClientService, deleteClientService } = require("../services/clientService");

// Cadastro de clientes
const registerClient = async (req, res) => {
  try {

    const registedClientData = await registerClientService(req);
    return res.status(201).json({ message: "Cliente registrado com sucesso!", registedClientData });

  } catch (error) {
    console.error("Cliente ou dados informados já existem", error.message);
    return res.status(error.statusCode || 500).json({ error: error.message })
  };
};
// Deletar cliente pelo id
const deleteClient = async (req, res) => {
  try {

    const deletedClientDB = await deleteClientService(req);
    return res.status(200).json({ message: "Cliente deletado com sucesso!", deletedClientDB });

  } catch (error) {
    console.error("Ocorreu um error ao deletar o cliente!", error.message);
    return res.status(error.statusCode || 500).json({ error: error.message });
  };

};

module.exports = {
  registerClient,
  deleteClient
};