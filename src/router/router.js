const epxress = require("express");
const route = epxress.Router();

const { validateRegister } = require("../middleware/validateRegister");
const validatorToken = require("../middleware/validatorToken");

// Import Routers
const login = require("../controller/login");
const { 
    registerClient
} = require("../controller/clientes");

// Login ADMIN 
route.post("/login", login)
route.use(validatorToken);
// Router Register Client
route.post("/clientes",  validateRegister,registerClient);

module.exports = route;