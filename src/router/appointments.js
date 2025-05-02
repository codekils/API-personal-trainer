const epxress = require("express");
const router = epxress.Router();

const { 
    registerAppointment,
    editAppointment,
    getAllAppointment,
    getAppointmentsByDate
 } = require("../controller/handlerAppointments");


// Router Agendamentos
router.get("/appointments", getAllAppointment);
router.get("/appointments/data", getAppointmentsByDate);
router.patch("/appointments", editAppointment);
router.post("/appointments", registerAppointment);

module.exports = router;