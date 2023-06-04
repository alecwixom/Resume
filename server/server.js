const express = require('express')
const cors = require('cors')
const app = express()
const port = 4001

app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + '/../public'))

app.listen(port, () => {
    console.log(`Up on ${port}`);
})