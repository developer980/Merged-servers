const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json())
const setRoutes = require('../router');

setRoutes(app)


app.listen(3000, () => {
    console.log('Server1 is running')
})