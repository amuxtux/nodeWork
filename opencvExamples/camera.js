var cv = require('opencv');

var camera = new cv.VideoCapture(0);


setInterval(function() {

	camera.read(function(im) {

		im.save('./cam.png');
	});

}, 1000);
