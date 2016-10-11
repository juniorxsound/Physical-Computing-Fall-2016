# Serial Drum Machine
For this exercise I used [p5.serialport](https://github.com/vanevery/p5.serialport) to build a simple drum machine that uses [p5.sound](https://github.com/processing/p5.js-sound) (web audio) oscilators to produce drum sounds.

To use the app you have to run the node server from you project directory:

```node startserver.js```

and update the Arduino port from the ```setup();``` function in ```sketch.js```
```
serial.open('YOUR_ARDUINO_PORT');
```
![Breadboard](https://github.com/juniorxsound/Physical-Computing-Fall-2016/blob/master/Serial%20Drum%20Machine/breadboard.png "breadboard image")
