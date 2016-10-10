var serial;
var rgb = ["255","255","255"];
var firtmsg = true;
var secondmsg = false;
var thirdmsg = false;

function preload(){}

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  serial = new p5.SerialPort();
  serial.on('data', serialEvent);
  serial.list();
  serial.open("/dev/cu.usbmodem1421");
}

function draw(){
    //console.log(millisecond);
    background(250,250,250);
    textSize(20);
    textAlign(CENTER);
    if (firtmsg){
      fill(200,100,100);
      var msg = text("GO FIND SOMETHING THAT HAS A STRAWBERRY COLOR", width/2, height/2);
    }
    if (secondmsg){
      fill(100,200,100);
      var msg = text("GO FIND SOMETHING THAT HAS A PEAR COLOR", width/2, height/2);
    }
    if (thirdmsg){
      fill(100,100,200);
      var msg = text("GO FIND SOMETHING THAT HAS A BLUEBERRY", width/2, height/2);
    }



    var r = dist(rgb[0],rgb[1],rgb[2], 255, 0, 0);
    var g = dist(rgb[0],rgb[1],rgb[2], 0, 255, 0);
    var b = dist(rgb[0],rgb[1],rgb[2], 0, 0, 255);
    if (r < 100) {
      firtmsg = false;
      background(rgb[0],rgb[1],rgb[2]);
      secondmsg = true;
    } else if( g < 250 && b > 200){
      secondmsg = false;
      background(rgb[0],rgb[1],rgb[2]);
      thirdmsg = true;
    } else if ( b < 250 && g > 200){
      thirdmsg = false;
      background(rgb[0],rgb[1],rgb[2]);
      firtmsg = true;
    }
}

window.onresize = function() {
    var w = window.innerWidth
    var h = window.innerHeight
    resizeCanvas(w, h)
}


function serialEvent() {
  var colorValue = serial.readLine().split(",");
  if(colorValue.length > 1){
    rgb = [colorValue[0].substring(1,4),colorValue[1].substring(1,4),colorValue[2].substring(1,4)];
  }
}
