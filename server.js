const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res) => {
    res.status(200).json({name: 'node-app-new'})
})

app.listen(3000)