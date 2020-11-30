//JShine esversion:6

const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extend: true }))

app.get("/", function(req, resp) {
    resp.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res) {

    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    var bmi = Math.floor(weight / (height * height));

    res.send("Your BMI is " + bmi);

})





app.listen("8080", function() {
    console.log("Server Started at http://localhost:8080")
})