var gm = require('gm');
gm('./imgs/original.jpg')
.size(function (err, size) {
if (!err)
    console.log("image width:"+size.width+" height:"+size.height);
    });
