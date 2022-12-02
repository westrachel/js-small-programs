interface bmiProfile {
  weight: number;
  height: number;
  bmi: string;
}

const calculateBmi = (height: number, weight: number): bmiProfile => {
  const bmiNum = weight / ((height / 100) ** 2);
  let bmi;
  
  if (bmiNum < 18.5) {
    bmi = 'Underweight';
  } else if (bmiNum <= 24.9) {
    bmi = 'Normal (healthy weight)';
  } else if (bmiNum <= 29.9) {
    bmi = 'Overweight';
  } else {
    bmi = 'Obese';
  }

  return { height, weight, bmi };
}


// For processing command line inputs before integrated express:
//const height: number = Number(process.argv[2]);
//const weight: number = Number(process.argv[3]);
//console.log(`BMI calculated for a height of ${height} cm & a weight of ${weight} kg is: ${calculateBmi(height, weight)}`);

export default calculateBmi;