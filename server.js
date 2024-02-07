const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res) => {
    res.status(200).json({name: 'node-app-new'})
})

app.get('/student',(req,res)=>{
    res.status(200).json([{
        name:"Rahul",
        age:23,
        city:'Mumbai'
    },
{
    name:"Rajni",
    age:67,
    city:'Chennai'
}
])
})

app.listen(3000)