const express = require('express'),
  path = require('path'),
  morgan = require('morgan'),
  expressLayouts = require('express-ejs-layouts'),
  routes = require('./routes/route'),
  app = express();

app.set('view engine','ejs');
app.set('port',3000);
app.set('views',path.join(__dirname,'views'));
app.set('layout',path.join(__dirname,'/views/layouts/layout'));


app.use('/public',express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'));
app.use(routes);
app.use(expressLayouts);

app.listen(app.get('port'),()=>{
  console.log(`Server on port: http://localhost:3000`);
});