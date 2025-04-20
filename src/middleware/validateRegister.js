
const clientSchema = require("../schema/registerClientSc");



async function register(req, res, next) {
    const { error } = await clientSchema.validate(req.body, { abortEarly: false });

    if (error) {
        return res.status(400).json({message: "Erro na validação"});
    }
    next();
};

module.exports = {
    register
}