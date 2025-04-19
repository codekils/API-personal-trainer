const registerClient = async (req, res) => {
    const { nome, telefone, email, objetivo, endereço } = req.body;

    try {
        return res.status(201).json({ Register: "register client sucesso!" })
    } catch (error) {
        return res.status(400).json({ message: error.detail })
    }
};