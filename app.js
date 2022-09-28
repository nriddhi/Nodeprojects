const Express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const app = new Express();
const postsRoute = require('./routes/videoPosts');

//MONGO_URL="mongodb+srv://rid:riddhi@cluster0.bqixv.mongodb.net/video?retryWrites=true&w=majority";

app.use(Express.json());
app.use(cors());

app.use('/api', postsRoute);

app.get('/', (req, res) => { res.send("kire")
});

mongoose.connect(process.env.MONGO_URL)
.then(res=> console.log('MongoDB Connected Succesfully'),
     err => console.log('Connection Error: ' + err)
);

app.listen('5000', ()=> {console.log('MongoDB Connected Succesfully from 5000')});

