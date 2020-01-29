const express  = require('express');
const hbs = require('hbs');
var fs  = require('fs');

var app = express();

hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
});

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req,res, next)=>{
  var now = new Date().toString();
  var log = `${now} ${req.method} ${req.url}`;

  //console.log(log);
  fs.appendFile('server-log' , log + '\n' ,(err)=>{
    return console.log(err);
  })


  next();
});


app.get('/', (req,res)=>{
  res.render('home.hbs',{
    pageTitle:'Home Page',
    welcomeMessage:'This is home page'
  });
});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'About Page',
    welcomeMessage:'This is about page'
  });
});

app.listen(5000,()=>{
  console.log('server is up on port 5000');
});
