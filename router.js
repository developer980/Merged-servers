
const home = require('./Controllers/home')
const page = require('./Controllers/page')
const page1 = require('./Controllers/page1')

// Routing function used by both servers

function setRoutes(app) {
    
    app.get("/home", (req, res) => home(req, res))

    app.get('/page', (req, res) => page(req, res))

    app.post('/page1', (req, res) => page1(req, res))
}
module.exports = setRoutes