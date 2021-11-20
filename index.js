const express = require('express'),
  path = require('path'),
  morgan = require('morgan'),
  routes = require('./routes/route'),
  app = express();

app.set('view engine','ejs');
app.set('port',3000);
app.set('views',path.join(__dirname,'views'));


app.use('/public',express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'));
app.use(routes);

app.listen(app.get('port'),()=>{
  console.log(`Server on port: http://localhost:3000`);
});