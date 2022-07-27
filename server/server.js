const express = require('express');
const app = express();

const cors = require('cors');
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4004;

app.listen(port, () => {
    console.log(`Server jamming on port ${port}`);
})