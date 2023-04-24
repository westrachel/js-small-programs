import express from 'express';
import bmi from './calculateBmi';
import exercises from './exerciseCalculator';
const app = express();

app.get('/bmi', (_req, res) => {
  const height = bmi.prepUrlNums(_req.originalUrl, 'height');
  const weight = bmi.prepUrlNums(_req.originalUrl, 'weight');

  if (height && weight) {
    res.send(bmi.calculateBmi(height, weight));
  } else {
    res.status(404).send({ error: 'malformatted parameters' });
  }
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;
  const inputsOrInvalidFlag = exercises.validInputs(target, daily_exercises);

  if (!inputsOrInvalidFlag) {
    res.status(404).send({ error: 'malformatted parameters' });
  } else {
    res.send(exercises.calculate(inputsOrInvalidFlag));
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

