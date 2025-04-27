const epxress = require("express");
const router = epxress.Router();

const validatorToken = require("../middleware/validatorToken");

const login = require("./login");
const appointments = require("./appointments");
const registerClient = require("./clients");


router.use(login);
router.use(validatorToken);
router.use(appointments);
router.use(registerClient);

// Router Register Client


module.exports = router;