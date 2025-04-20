const epxress = require("express");
const route = epxress.Router();

const { register } = require("../middleware/validateRegister");

// Import Routers
const { 
    registerClient
 } = require("../controller/clientes");

 // Router Register Client
route.post("/clientes",  register,registerClient);

module.exports = route;