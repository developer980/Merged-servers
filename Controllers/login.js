const User = require('../Models/User')

function login(req, res) {
    const body = req.body
    const user = new User()
    user.setUser(body.email, body.username)
    res.status(200).send("Created user with email: " + user.email + " and username: " + user.username)
}

module.exports = login