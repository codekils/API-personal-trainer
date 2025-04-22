const epxress = require("express");
const route = epxress.Router();

const { validateRegister } = require("../middleware/validateRegister");
const validatorToken = require("../middleware/validatorToken");

// Import Routers
const login = require("../controller/login");
const { agendaRegister } = require("../controller/agendamentos");
const { 
    registerClient,
    listAgenda
} = require("../controller/clientes");

// Login ADMIN 
route.post("/login", login)
route.use(validatorToken);
// Router Register Client
route.get("/agendamentos", listAgenda);
route.post("/agendamentos", agendaRegister);
route.post("/clientes",  validateRegister,registerClient);

module.exports = route;