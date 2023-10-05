const height = Number(prompt("Please Enter Your Height in centimeters "));
const weight = Number(prompt("Please Enter Your Weight in Kilograms: "));

function cal() {
  const meter = height / 100;
  const metsq = meter * meter;
  const bmi = weight / metsq;
  return bmi;
}

function text(bmi){
  const text1 = "Your BMI is"
  const text2 = "."
  const together = `${text1} ${bmi}` + text2
  console.log(together)
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
