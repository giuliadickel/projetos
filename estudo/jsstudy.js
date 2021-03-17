function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

  function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
  }

  var x = "John" + " " + "Doe";
  document.getElementById("demo").innerHTML = x;

  
var carName = "Volvo";
myFunction();

function myFunction(p1, p2) {
    return p1 * p2;
  }
  document.getElementById("demo").innerHTML = myFunction(4, 3);
  </script>

  function toCelsius(f) {
    return (5/9) * (f-32);
  }
  document.getElementById("demo").innerHTML = toCelsius(77);

  // Create an object:
var car = {type:"Fiat", model:"500", color:"white"};

// Display some data from the object:
document.getElementById("demo").innerHTML = "The car type is " + car.type;


