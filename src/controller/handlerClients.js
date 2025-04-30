const db = require('../connection/db_connection');
const clientRepository = require("../model/repositoryClient");

// Cadastro de clientes
const registerClient = async (req, res) => {
    const clientData = req.body;

    try {
        const dataClient = await clientRepository.insert(clientData);
        return res.status(201).json({ message: "register client sucesso!", dataClient });
    } catch (error) {
        return res.status(400).json({ message: error })
    }
};
// Deletar cliente pelo id
const deleteClient = async (req, res) => {
    const { id } = req.query;
    console.log(id);
    
    try {

      const data = await db("clientes").where({id}).delete();
        console.log(data);
        
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