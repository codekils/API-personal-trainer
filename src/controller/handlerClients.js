const db = require('../connection/db_connection');
const { newRegisterClient } = require("../services/clientService");

// Cadastro de clientes
const registerClient = async (req, res) => {

  try {
    const registedClientData = await newRegisterClient(req);
    return res.status(201).json({ message: "Cliente registrado com sucesso!", registedClientData });

  } catch (error) {
    return res.status(400).json({ message: error })
  };
};
// Deletar cliente pelo id
const deleteClient = async (req, res) => {
  const { id } = req.query;

  try {

    const data = await db("clientes").where({ id }).delete();

    if (!data) {
      return res.status(400).json({ message: "Usuário informado não foi encontrado!" });
    };

    return res.status(200).json({ message: "Cliente deletado com sucesso!" });

  } catch (error) {
    return res.status(400).json({ message: error });
  };

};

module.exports = {
  registerClient,
  deleteClient
};