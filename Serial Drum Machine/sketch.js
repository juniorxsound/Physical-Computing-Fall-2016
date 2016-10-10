var serial, kick, snare, hat, tomOne, tomTwo;

function setup() {
  // Instantiate our SerialPort object
  serial = new p5.SerialPort();
  // Assuming our Arduino is connected, let's open the connection to it
  // Change this to the name of your arduino's serial port
  serial.open("COM4");

  // When we connect to the underlying server
  serial.on('connected', serverConnected);

  // When we get a list of serial ports that are available
  serial.on('list', gotList);

  // When we some data from the serial port
  serial.on('data', gotData);

  // When or if we get an error
  serial.on('error', gotError);

  // When our serial port is opened and ready for read/write
  serial.on('open', gotOpen);

  //Kick Sound
  kick = new p5.SinOsc();
  kick.freq(100);
  kick.amp(0);
  kick.start();

  //Snare
  snare = new p5.Noise('pink');
  snare.amp(0);
  snare.start();

  //HiHat
  hat = new p5.Noise('white');
  hat.amp(0);
  hat.start();

  //Tom 1
  tomOne = new p5.SinOsc();
  tomOne.freq(400);
  tomOne.amp(0);
  tomOne.start();

  //Tom 1
  tomTwo = new p5.SinOsc();
  tomTwo.freq(200);
  tomTwo.amp(0);
  tomTwo.start();
}


// We are connected and ready to go
function serverConnected() {
    console.log("Connected to the Arduino");
}

// Got the list of ports
function gotList(thelist) {
  // theList is an array of their names
  for (var i = 0; i < thelist.length; i++) {
    // Display in the console
    console.log(i + " " + thelist[i]);
  }
}

// Connected to our serial device
function gotOpen() {
  console.log("Serial Port is open!");
}

// Ut oh, here is an error, let's log it
function gotError(theerror) {
  console.log(theerror);
}

// There is data available to work with from the serial port
function gotData() {
  //Read the data between line breaks
  var currentString = serial.readStringUntil("\r\n");

        //Trigger the right drum
      if(currentString == '1'){
              kick.amp(0.8);

              //Release note
              setTimeout(function(){
                kick.amp(0.0, 0.1);
              }, 100);
      }
      if(currentString == '2'){
        snare.amp(0.8);

        //Release note
        setTimeout(function(){
          snare.amp(0.0, 0.1);
        }, 100);
      }
      if(currentString == '3'){
        hat.amp(0.5);

        //Release note
        setTimeout(function(){
          hat.amp(0.0);
        }, 20);
      }
      if(currentString == '4'){
        tomOne.amp(0.5);

        //Release note
        setTimeout(function(){
          tomOne.amp(0.0, 0.1);
        }, 100);
      }
      if(currentString == '5'){
        tomTwo.amp(0.5);

        //Release note
        setTimeout(function(){
          tomTwo.amp(0.0, 0.1);
        }, 100);
      }


  console.log(currentString);
}

// Methods available
// serial.read() returns a single byte of data (first in the buffer)
// serial.readChar() returns a single char 'A', 'a'
// serial.readBytes() returns all of the data available as an array of bytes
// serial.readBytesUntil('\n') returns all of the data available until a '\n' (line break) is encountered
// serial.readString() retunrs all of the data available as a string
// serial.readStringUntil('\n') returns all of the data available as a tring until a (line break) is encountered
// serial.last() returns the last byte of data from the buffer
// serial.lastChar() returns the last byte of data from the buffer as a char
// serial.clear() clears the underlying serial buffer
// serial.available() returns the number of bytes available in the buffer

function draw() {

}
