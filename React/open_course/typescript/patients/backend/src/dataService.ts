import diagnosesData from '../data/diagnoses.json';
import patientData from '../data/patients.json';
import { v1 as uuid } from 'uuid';
import { Diagnosis, PatientDisplay, NewPatient, Patient } from './types';

const diagnoses: Array<Diagnosis> = diagnosesData as Array<Diagnosis>;
const patients: Array<PatientDisplay> = patientData as unknown as Array<PatientDisplay>;

const getDiagnoses = (): Array<Diagnosis> => {
  return diagnoses;
};

const getPatients = (): Array<PatientDisplay> => {
  return patients;
};

const addPatient = ( details: NewPatient ): Patient => {
  const newPatientProfile ={
    id: uuid(),
    ...details
  };

  return newPatientProfile;
}

export default {
  getDiagnoses,
  getPatients,
  addPatient
};