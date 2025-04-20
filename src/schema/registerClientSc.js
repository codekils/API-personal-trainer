const Joi = require("joi");

const clientSchema = Joi.object({
    
    nome: Joi.string().trim().required(),
    telefone: Joi.string().trim().required(),
    email: Joi.string().email().trim().required(),
    objetivo: Joi.string().trim().required(),
    endereço: Joi.string().trim().required()

})

module.exports = clientSchema;