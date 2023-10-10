const height = Number(prompt("Please Enter Your Height in centimeters "));
const weight = Number(prompt("Please Enter Your Weight in Kilograms: "));

function cal() {
  const meter = height / 100;
  const metsq = meter * meter;
  const bmi = weight / metsq;
  return bmi;
}

function text(bmi) {
  console.log("Your BMI is", bmi, "kg/msq.");
}

function evaluation(x) {
  if (x >= 30) {
    console.log("You are obese.");
  } else if (x >= 25) {
    console.log("You are overweight.");
  } else if (x >= 18.5) {
    console.log("You are normal weight.");
  } else {
    console.log("You are underweight.");
  }
}

text(cal());
evaluation(cal());
