const db = require('../connection/db_connection');

// Cadastro de clientes
const registerClient = async (req, res) => {
    const { nome, telefone, email, objetivo, endereço } = req.body;

    try {

        const data = await db("clientes").insert({
            nome,
            telefone,
            email,
            objetivo,
            endereço
        }).returning("*");

        if (!data) {
            return res.status(401).json({message: "Ocorreu um erro"});
        }

        return res.status(201).json({ message: "register client sucesso!" })

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