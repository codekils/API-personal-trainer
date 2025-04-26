const epxress = require("express");
const router = epxress.Router();

const { 
    agendaRegister,
    listAgendaDay,
    listAgenda
 } = require("../controller/agendamentos");


// Router Agendamentos
router.get("/agendamentos", listAgenda);
router.get("/agendamentos", listAgendaDay);
router.post("/agendamentos", agendaRegister);

module.exports = router;