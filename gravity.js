
// gm - Copyright Aaron Heckmann <aaron.heckmann+github@gmail.com> (MIT Licensed)

var gm = require('gm')
  , dir = __dirname + '/imgs'

gm(dir + '/ball.jpg')
  .resize(200,100)
  .gravity("Center") // Be sure to use gravity BEFORE extent
  .extent(300, 300)
  .write(dir + '/gravity.jpg', function(err){
    if (err) return console.dir(arguments)
    console.log(this.outname + " created  ::  " + arguments[3])
    require('child_process').exec('open ' + dir + '/gravity.jpg');
  }
)
