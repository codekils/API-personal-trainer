const epxress = require("express");
const route = epxress.Router();

const { validateRegister } = require("../middleware/validateRegister");

// Import Routers
const { 
    registerClient
 } = require("../controller/clientes");

 // Router Register Client
route.post("/clientes",  validateRegister,registerClient);

module.exports = route;