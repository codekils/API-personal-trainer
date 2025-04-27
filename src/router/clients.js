const express = require("express");
const router = express.Router();
// Validação Joi Corpo da requisição
const { validateRegister } = require("../middleware/validateRegister");
// Importação de controller Cliente
const {
    registerClient,
    deleteClient
} = require("../controller/HandlerClient");
// Validação de Cliente existente
const validateEmailPhone = require("../middleware/validateUser");
// Endpoints
router.post("/client",  validateEmailPhone,validateRegister,registerClient);
router.delete("/client", deleteClient);

module.exports = router;