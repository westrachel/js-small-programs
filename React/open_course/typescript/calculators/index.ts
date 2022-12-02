import express from 'express';
import calculateBmi from './calculateBmi';
const app = express();

app.get('/bmi', (_req, res) => {
  const height = 180;
  const weight = 70;
  res.send(calculateBmi(height, weight));
})

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});