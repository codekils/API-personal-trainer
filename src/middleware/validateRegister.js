
const clientSchema = require("../schema/registerClientSc");

async function validateRegister(req, res, next) {
    const { error } = await clientSchema.validate(req.body, { abortEarly: false });

    if (error) {
        // const mensagens = error.details.map((detail) => detail.message);
        return res.status(400).json({ erros: error.details[0].message });
      }
      
    next();
};

module.exports = {
    validateRegister
}