const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/button', (req, res) => {
    res.sendFile(__dirname + '/public/button.html');
    console.log(__dirname + '/public/button.html');
})

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})