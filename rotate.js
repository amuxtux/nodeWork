
// gm - Copyright Aaron Heckmann <aaron.heckmann+github@gmail.com> (MIT Licensed)

var gm = require('gm')
  , dir = __dirname + '/imgs'
  
gm(dir + '/original.jpg')
  .rotate('red', -30)
  .write(dir + '/rotate.jpg', function(err){
    if (err) return console.dir(arguments)
    console.log(this.outname + " created  ::  " + arguments[3])
    require('child_process').exec('open ' + dir + '/rotate.jpg');
  }
) 
