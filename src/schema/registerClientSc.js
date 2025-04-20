const Joi = require("joi");

const clientSchema = Joi.object({
  nome: Joi.string().trim().required().messages({
    "string.base": "O nome precisa ser um texto",
    "string.empty": "Você precisa adicionar um nome",
    "any.required": "O campo nome é obrigatório"
  }),
  telefone: Joi.string().trim().required().messages({
    "string.empty": "O telefone é obrigatório",
    "any.required": "O campo telefone é obrigatório"
  }),
  email: Joi.string().email().trim().required().messages({
    "string.email": "O e-mail precisa ser válido",
    "string.empty": "O e-mail não pode estar vazio",
    "any.required": "O campo e-mail é obrigatório"
  }),
  objetivo: Joi.string().trim(),
  endereço: Joi.string().trim(),
});

module.exports = clientSchema;
