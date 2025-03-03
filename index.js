const express = require('express');
const app = express();

const {Restaurant, Item} = require('/Models/schema.js')
const PORT = 3010;

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`)
})