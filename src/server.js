const express = require("express");
const app = express();

app.use(express.json());

app.listen(300, () => {
    console.log(`Server is running PORT: `);  
})