const express = require("express");
const router = express.Router();
// Validação Joi Corpo da requisição
const { validateRegister } = require("../middleware/validateRegister");
// Importação de controller Cliente
const {
    registerClient,
    deleteClient
} = require("../controller/handlerClients");
// Endpoints
router.post("/client", validateRegister,registerClient);
router.delete("/client", deleteClient);

module.exports = router;