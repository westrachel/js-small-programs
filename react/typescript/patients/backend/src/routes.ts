import express from 'express';
import dataService from './dataService';
import toNewPatient from './utils';

const router = express.Router();

router.get('/diagnoses', (_req, res) => {
  res.send(dataService.getDiagnoses());
});

router.get('/patients', (_req, res) => {
  res.send(dataService.getPatients());
});

router.get('/ping', (_req, res) => {
  res.send('pong!');
});

router.post('/patients', (req, res) => {
  try {
    const newPatientEntry = toNewPatient(req.body);
    const newPatient = dataService.addPatient(newPatientEntry);
    res.json(newPatient);
  } catch (error: unknown) {
    let errorMsg = 'Error!';
    if (error instanceof Error) {
      errorMsg += ` ${error.message}`;
    }
    res.status(400).send(errorMsg);
  }
});

export default router;