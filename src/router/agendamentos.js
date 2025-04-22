const epxress = require("express");
const router = epxress.Router();

const { 
    agendaRegister,
    listAgenda
 } = require("../controller/agendamentos");


// Router Agendamentos
router.get("/agendamentos", listAgenda);
router.post("/agendamentos", agendaRegister);

module.exports = router;