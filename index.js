const height = Number(prompt("Please Enter Your Height in centimeters "));
const weight = Number(prompt("Please Enter Your Weight in Kilograms: "));

function bmi1() {
  const meter = height / 100;
  const metsq = meter * meter;
  const bmi = weight / metsq;
  console.log("You are", bmi, "kg/meters squared.");
  return bmi;
}

function evaluation(bmi1) {
  bmi = bmi1;
  if (bmi >= 30) {
    console.log("You are obesit.");
  } else if (bmi >= 25) {
    console.log("You are overweight.");
  } else if (bmi >= 18.5) {
    console.log("You are normal weight.");
  } else {
    console.log("You are underweight.");
  }
}

bmi1();
evaluation();
