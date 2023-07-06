const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const errorController = require('./controllers/Error')
const app = express(); // Express Makes The app {Server}

// Adding Template Engine 
app.set('view engine','ejs');
app.set('views','views'); //Our ejs files in folder named views

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Help to parse the body in our project
app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);


app.use(errorController.get404);
app.listen(3000);
