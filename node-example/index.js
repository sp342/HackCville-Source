let express = require("express");

let app = express();

app.get("/", (req,res) => {
    res.send("Hello World");
});

app.get("/pic", (req, res) => {
    res.sendfile("Pic.jpg");
});

app.get("/ageofinnocence", (req, res) => {
    res.sendfile("ageofinnocence.txt");
});

app.get("/annakarenina", (req, res) => {
    res.sendfile("annakarenina.txt");
});

app.get("/candide", (req, res) => {
    res.sendfile("candide.txt");
});

app.get("/janeeyre", (req, res) => {
    res.sendfile("janeeyre.txt");
});

app.get("/karamazov", (req, res) => {
    res.sendfile("karamazov.txt");
});

app.get("/northangerabbey", (req, res) => {
    res.sendfile("northangerabbey.txt");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
})