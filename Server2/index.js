const express = require('express');
const app = express();
const setRoutes = require('../router');

setRoutes(app)

app.listen(3000, () => {
    console.log('Server2 is running')
})