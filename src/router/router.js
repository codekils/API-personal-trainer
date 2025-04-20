const epxress = require("express");
const router = epxress.Router();

const { registerClient } = require("../controller/clientes");

router.post("/clientes", registerClient);

module.exports = router;