const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const router = require("./router/router");

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server is running PORT: ${process.env.PORT} `);  
});