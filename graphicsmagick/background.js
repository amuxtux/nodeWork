var gm = require('gm')
  , dir = __dirname + '/imgs'

gm(dir + "/original.jpg")
  //.crop(140,100)
  .background("#FF0000")  //red background
  .extent(480,300)
  .write(dir + '/background.jpg', function (err) {
    if (err) return console.dir(arguments)
    console.log(this.outname + " created  ::  " + arguments[3])
});

