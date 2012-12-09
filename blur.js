
// gm - Copyright Aaron Heckmann <aaron.heckmann+github@gmail.com> (MIT Licensed)

var gm = require('gm')
  , dir = __dirname + '/imgs'

gm(dir + '/galaxy.jpg')
  .blur(19, 10)
  .write(dir + '/galaxy_blurred.jpg', function(err){
    if (err) return console.dir(arguments)
    console.log(this.outname + ' created  :: ' + arguments[3])
    require('child_process').exec('open ' + dir + '/galaxy_blurred.jpg');
  }
) 
