//Arduino Moisture Checker
// Using Moisture sensor, Ultrasonic distance sensor and a peizo

//LEDS & Sensor Pins
#define red_led 3
#define yellow_led 4
#define green_led 2
#define ultrasonic_send 5
#define ultrasonic_recive 6

//Interval for LED effect
const long interval = 1500;
//Storing Last Time State
unsigned long lastTimeState = 0;

// SENSORS
int distance;
int moistureSensor;

int moistureState;

int counter = 0;

void setup(){
  Serial.begin(9600);

  //ULTRASONIC SETUP
  pinMode(ultrasonic_send, OUTPUT);
  pinMode(ultrasonic_recive, INPUT);

  //LEDs
  pinMode(red_led, OUTPUT);
  pinMode(yellow_led, OUTPUT);
  pinMode(green_led, OUTPUT);
}
void loop(){
  //Setup reads for the moisture
  moistureSensor = analogRead(A0);
  //Function for handeling sonic distance sensor
  ultrasonify();
  //Read the ultrasonic distance
  Serial.println(moistureSensor);

  if (distance < 100){
    if (moistureSensor < 400 ){
      ledEffect(2);
    } else if (moistureSensor > 400 && moistureSensor < 800){
      ledEffect(4);
    } else if (moistureSensor > 800){
      ledEffect(3);
    }
  } else {
    counter = 0;
    analogWrite(2, 0);
    analogWrite(3, 0);
    analogWrite(4, 0);
  }
}
void ultrasonify(){
  //Mute sound
  digitalWrite(ultrasonic_send, LOW);
  //Be Patient
  delayMicroseconds(2);
  //Send sound
  digitalWrite(ultrasonic_send, HIGH);
  //Be Patient again
  delayMicroseconds(10);
  //Mute sound
  digitalWrite(ultrasonic_send, LOW);
  //Analyse the input
  int duration = pulseIn(ultrasonic_recive, HIGH);
  //Calculate the input and save into global variable
  distance = (duration/2) / 29.1;
}
void ledEffect(int moistureState){
  //Mimic the effect of a sine wave breathing effect for the leds
  //Is there any way I can use an actual number generator to not delay the loop?

  unsigned long currentTimeState = millis();

  if(counter == 0){
    for(counter = 0; counter < 255; counter += 0.1){
      analogWrite(moistureState, counter);
      //delay(10);
    }
  } else if (counter == 255){
    for(counter = 255; counter > 0; counter += 0.1){
      analogWrite(moistureState, counter);
      //delay(10);
    }
  } else {
    counter = 0;
  }
}
