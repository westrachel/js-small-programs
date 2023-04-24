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
};

const prepUrlNums = (queryString: string, heightWeight: string): number => {
  const wordRegex = new RegExp(`${heightWeight}=[0-9]{1,}`);
  const numRegex = new RegExp('[0-9]{1,}');
  const stringNum = String(String(queryString.match(wordRegex)).match(numRegex));
  return Number(stringNum);
};

const bmi = { calculateBmi, prepUrlNums };

export default bmi;
