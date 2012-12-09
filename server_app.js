
/**
 * Module dependencies.
 */
var nowjs = require("now");
var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();
var gm = require('gm')
  , dir = __dirname + '/imgs'
// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/imgs'));
});


app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.listen(3000, function(){
  console.log("Express server listening in %s mode", app.settings.env);
});

var everyone = nowjs.initialize(app);

everyone.now.performEffect = function(img,effect){
  console.log("------- performing effect  --- "+effect+ " on image "+img);
  
  if(effect == 'blur'){
     blur(img);
  } else if(effect == 'draw'){
     draw(img);
  }
};

function blur(img){
     gm(dir + '/'+img).blur(19, 10).write(dir + '/blurred.jpg', function(err){
      if (err) return console.dir(arguments)
      console.log(this.outname + ' created  :: ' + arguments[3])
      everyone.now.receiveOutput("msg", "blurred.jpg");
      //require('child_process').exec('open ' + dir + '/galaxy_blurred.jpg');
  }); 
}

function draw(img){
  gm(dir + '/'+img)
    .stroke("red", 7)
    .fill("#ffffffbb")
    .drawLine(20, 10, 50, 40)
    .fill("#2c2")
    .stroke("blue", 1)
    .drawRectangle(40, 10, 50, 100)
    .drawRectangle(60, 10, 70, 20, 3)
    .drawArc(80, 10, 90, 20, 0, 180)
    .drawEllipse(105, 15, 3, 5)
    .drawCircle(125, 15, 120, 120)
    .drawPolyline([140, 10], [143, 13], [145, 13], [147, 15], [145, 17], [143, 19])
    .drawPolygon([160, 10], [163, 13], [165, 13], [167, 15], [165, 17], [163, 19])
    .drawBezier([180, 10], [183, 13], [185, 13], [187, 15], [185, 17], [183, 19])
    .fontSize(68)
    .stroke("#efe", 2)
    .fill("#888")
    .write(dir + '/drawing.jpg', function(err){
      if (err) return console.dir(arguments)
      console.log(this.outname + ' created  :: ' + arguments[3])
      everyone.now.receiveOutput("msg", "drawing.jpg");
    }) 
}
//  everyone.now.receiveOutput("msg", "\n ---- waiting for compiler  ----");


