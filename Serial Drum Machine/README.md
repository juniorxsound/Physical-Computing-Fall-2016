# Serial Drum Machine
For this exercise I used [p5.serialport](https://github.com/vanevery/p5.serialport) to build a simple drum machine that uses [p5.sound](https://github.com/processing/p5.js-sound) osiclators to produce drum sounds.

To use the app you have to:

```node startserver.js```

from the directory and update the Arduino port from the ```setup();``` function
```
serial.open('YOUR_ARDUINO_PORT');
```

