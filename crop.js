
// gm - Copyright Aaron Heckmann <aaron.heckmann+github@gmail.com> (MIT Licensed)

var gm = require('gm')
  , dir = __dirname + '/imgs'
  
gm(dir + '/original.png')
  .crop(200, 155, 300, 0)
  .write(dir + "/crop.jpg", function(err){
    if (err) return console.dir(arguments)
    console.log(this.outname + " created  ::  " + arguments[3])
    require('child_process').exec('open ' + dir+'/crop.jpg')
  }
) 
