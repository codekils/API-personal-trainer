const express = require("express");
const router = express.Router();


const { validateRegister } = require("../middleware/validateRegister");

const registerClient = require("../controller/clientes");

router.post("/clientes",  validateRegister,registerClient);

module.exports = router;