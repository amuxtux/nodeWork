var imgs = new Array;

if(process.argv.length < 4){
   console.log("insufficiaten arguments.  usage node append.js 1.png 2.png");
   //console.log(JSON.stringify(process.argv));
    process.argv.forEach(function (val, index, array) {
      console.log(index + ': ' + val);
    });
}else{

    var gm = require('gm')
      , dir = __dirname + '/imgs'
      , out = dir + '/append.jpg';
      
    imgs[0] = dir + '/' + process.argv[2];
    imgs[1] = dir + '/' + process.argv[3];
    
    console.log(imgs);
    gm(imgs[0])
    .append(imgs[1])
    .append()
    .background('#222')
    .write(out, function (err) {
      if (err) return console.dir(arguments)
      console.log(this.outname + " created  ::  " + arguments[3])
      require('child_process').exec('open ' + out)
    });
}