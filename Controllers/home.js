const Data = require("../Models/Data1")

function home(req, res) {
    res.send("home");
}

function updateHome(req, res) {
    const body = req.body;
    const data = new Data();
    data.setInfo(body.info1, body.info1)
    res.status(200).send('created new data with ' + body.info1 + " and " + body.info2 + " form the request body");
}

module.exports = home;
module.exports = updateHome;