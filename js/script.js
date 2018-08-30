var helloQuestion = function(x) {
  x = parseInt(prompt("Hello user. I am a multifunciton page. Would you like to \n 1) Calculate your BMI\n 2) Convert Celcius to Fahrenheit\n 3) Convert gallons to liters\n Please type the number to select your choice."));
  if (x === 1) {
    question();
  }
  else if (x === 2) {
    alert("C/F converter under construction at the moment, check back soon");
  }
  else if (x === 3) {
    alert("Gal/Liter conversion under construction at the moment, check back soon");
  }
  else {
    alert("You did not select properly, please select 1, 2, or 3");
  }
}

var question = function(region) {
  region = prompt("Would you like to calculate your BMI with the english or metric system? Please enter E or M.").toUpperCase();
  //alert("selection: " + region)
  if (region === "E") {
    heightIn = parseInt(prompt("Hello, please provide your height, in inches:"));
    weightLb = parseInt(prompt("Please provide your weight, in lbs:"));
    var bmi = (weightLb*0.453592)/(heightIn*0.0254);
    alert("Your BMI is " + bmi + ".");
  }
  else if (region === "M") {
    var weightKg = prompt("Hello, please provide your weight in Kgs:");
    var heightM = prompt("Please provide your height in meters:");
    var bmi = (weightKg)/(heightM);
    alert("Your BMI is " + bmi + ".");
  }
  else {
    alert("You did not pick E or M, please pick one of those two selections for (E)nglish system, or (M)etric system");
  }
}

helloQuestion();