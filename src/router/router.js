const epxress = require("express");
const router = epxress.Router();

const validatorToken = require("../middleware/validatorToken");

const login = require("./login");
const agendmaentos = require("./agendamentos");
const registerClient = require("./clientes");


router.use(login);
router.use(validatorToken);
router.use(agendmaentos);
router.use(registerClient);

// Router Register Client


module.exports = router;