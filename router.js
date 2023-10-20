
const home = require('./Controllers/home')
const updateHome = require('./Controllers/home')
const page = require('./Controllers/page')
const page1 = require('./Controllers/page1')
const login = require('./Controllers/login')

// Routing function used by both servers

function setRoutes(app) {
    
    app.get("/home", (req, res) => home(req, res))
    app.post("/home", (req, res) => updateHome(req, res))
    
    app.get("/home", (req, res) => home(req, res))

    app.get('/page', (req, res) => page(req, res))

    app.post('/page1', (req, res) => page1(req, res))

    app.post('/login', (req, res) => login(req, res))
}
module.exports = setRoutes