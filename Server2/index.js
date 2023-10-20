const express = require('express');
const app = express();
const setRoutes = require('../router');
const cors = require('cors')
app.use(cors());
app.use(express.json())

setRoutes(app)

app.listen(3000, () => {
    console.log('Server2 is running')
})