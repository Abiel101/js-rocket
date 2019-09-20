console.log("Hello there friends");

var car = {
  make: 'Tesla',
  type: 'Rover',
  color: 'Black',
  isTurnedOn: false,
  numberOfWheels: 4,
  seats: [
    'seat1',
    'seat2',
    'seat3',
    'seat4',
  ],

  // turnOn: function () {
  //   this.isTurnedOn = true;
  //   return 'isTurnedOn Function Changed to '+ this.isTurnedOn;
  // },
  // fly: function () {
  //   alert('Fly');
  // },

  switchCar: function (isOn) {
    console.log ('Turn car '+isOn);
    
    if (isOn == true) {
      this.isTurnedOn = true;
    } else {
      this.isTurnedOn = false;
    }
  }
}
