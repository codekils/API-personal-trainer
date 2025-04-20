const express = require("express");
const app = express();
const cors = require("cors");

const router = require("./router/router");

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3000, () => {
    console.log(`Server is running PORT: `);  
})