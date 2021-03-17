const dotenv = require('dotenv');
const express = require('express');
const app = express();
dotenv.config({ path: './config.env' });
require('./db/conn');

app.use(express.json());
// const Use = require('./model/userSchema');
app.use(require('./router/auth'));

const PORT = process.env.PORT;


const middleware = (req, res, next) => {
    console.log("hello from middleware");
    next();

}

app.get('/', (req, res) => {
    res.send("hello home from app.js");
});

app.get('/about', middleware, (req, res) => {
    res.send("hello from about world");
});




app.listen(PORT, () => {
    console.log(`server running in ${PORT}`);
});