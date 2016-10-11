//Pin Setup
const int myButtons[5] = {3, 4, 5, 6, 7};

//Storing last state for buttons
int lastStates[5] = {0, 0, 0, 0, 0};

// Storing Read Values
int buttonStates[5] = {0, 0, 0, 0, 0};

void setup(){
  //Init communication
  Serial.begin(9600);
  //Button setup
  for(int i = 0; i <= sizeof(myButtons); i++){
    pinMode(myButtons[i], INPUT);
  }
}
void loop(){
  //Read all buttons and store values
  buttonStates[0] = digitalRead(myButtons[0]);
  buttonStates[1] = digitalRead(myButtons[1]);
  buttonStates[2] = digitalRead(myButtons[2]);
  buttonStates[3] = digitalRead(myButtons[3]);
  buttonStates[4] = digitalRead(myButtons[4]);

  //Delay the loop a little
  delay(10);

  //Check to see if buttons wer'e pressed and send over serial
  if(buttonStates[0] == HIGH && buttonStates[0] == !lastStates[0]){
    Serial.println(buttonStates[0]);
  } else if(buttonStates[1] == HIGH && buttonStates[1] == !lastStates[1]){
    Serial.println(buttonStates[1]+1);
  } else if(buttonStates[2] == HIGH && buttonStates[2] == !lastStates[2]){
    Serial.println(buttonStates[2]+2);
  } else if(buttonStates[3] == HIGH && buttonStates[3] == !lastStates[3]){
    Serial.println(buttonStates[3]+3);
  } else if(buttonStates[4] == HIGH && buttonStates[4] == !lastStates[4]){
    Serial.println(buttonStates[4]+4);
  }


  //Store last values
  lastStates[0] = buttonStates[0];
  lastStates[1] = buttonStates[1];
  lastStates[2] = buttonStates[2];
  lastStates[3] = buttonStates[3];
  lastStates[4] = buttonStates[4];


}
