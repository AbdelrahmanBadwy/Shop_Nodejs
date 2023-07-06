const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express(); // Express Makes The app {Server}

// Adding Template Engine 
// app.set('view engine','pug'); //Use pug template engine
app.set('view engine','ejs');
app.set('views','views'); //Our html files in folder named views

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Help to parse the body in our project
app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);


app.use((req,res,next)=>{
   res.status(404).render('404',{pageTitle : '404 badawy'});
});
app.listen(3000);
