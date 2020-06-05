const express=  require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRouter = require('./router/todoRouter');
const app = express();

const port = 4000;

const url = "mongodb://localhost:27017/merntodo";
const connect = mongoose.connect(url , { useNewUrlParser:true , useUnifiedTopology:true});

connect.then((db)=>{
    console.log(`Connected to DataBase`);
})

app.use(cors());
app.use(bodyParser.json());

app.use('/todo' , todoRouter);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})