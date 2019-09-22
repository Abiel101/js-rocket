var launch = function () {
  var notLaunched = document.getElementById('rocket').className;

  if (notLaunched == 'rocket') {
    document.getElementById('rocket').className = 'rocket fly';
  } else {
    document.getElementById('rocket').className = 'rocket';
  }
}