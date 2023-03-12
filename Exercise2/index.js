const express = require('express')
const fs = require('fs')
const app = express()

app.get('/', function(req, res) {
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return res.send("There is a server error");

        }
        res.send(data);
    });

})
const port = 3000
app.listen(port, () => {
    console.log("Running localhost:" + port)
})