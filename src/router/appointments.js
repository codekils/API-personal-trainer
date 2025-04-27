const epxress = require("express");
const router = epxress.Router();

const { 
    registerAppointment,
    editAppointment,
    allAppointment,
    getAppointmentsByDate
 } = require("../controller/handlerAppointments");


// Router Agendamentos
router.get("/appointments", allAppointment);
router.get("/appointments/data", getAppointmentsByDate);
router.patch("/appointments", editAppointment);
router.post("/appointments", registerAppointment);

module.exports = router;