const express = require('express')
const fs = require('fs')
const app = express()

app.get('/', function(req, res) {
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;

        }
        res.send(data);
    });

})
app.get('/detail', function(req, res) {
    fs.readFile('detail.html', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;

        }
        res.send(data);
    });

})
const port = 3000
app.listen(port, () => {
    console.log("Running http://localhost:" + port)
})