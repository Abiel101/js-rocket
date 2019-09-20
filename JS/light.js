var turnLightsOn = function () {
  var circleClass = document.getElementById('lightBulb').className;

  if (circleClass == 'circle') {
    document.getElementById('lightBulb').className = 'circle lightOn';
    document.getElementById('on_off').innerHTML = 'TURN OFF';
    document.getElementById('light_bg').style.backgroundColor = 'white';
    }else{
    document.getElementById('lightBulb').className = 'circle';
    document.getElementById('on_off').innerHTML = 'TURN ON';
    document.getElementById('light_bg').style.backgroundColor = 'black';
  }
}