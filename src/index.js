const express=require('express');
const app=express();
const path=require('path')
const pool=require('./database');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(require('./routes/index'));
app.listen(3000);
