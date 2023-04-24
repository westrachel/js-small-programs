import { NewPatient, Gender } from './types';

const parseStringInput = (input: unknown, type: string): string => {
  if (!input || !isString(input)) {
    throw new Error(`Incorrect or missing input for ${type}`);
  }

  return input;
};

const parseGender = (gender: unknown): Gender => {
  if (!isGender(gender)) {
    throw new Error('Incorrect gender. Valid genders are: female, male, & genderless.');
  }
  return gender;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Gender).includes(param);
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

type Fields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown };

const toNewPatient = ({ name, dateOfBirth, ssn, gender, occupation }: Fields): NewPatient => {
  const newProfile: NewPatient = {
    name: parseStringInput(name, 'name'),
    dateOfBirth: parseStringInput(dateOfBirth, 'birthdate'),
    ssn: parseStringInput(ssn, 'ssn'),
    gender: parseGender(gender),
    occupation: parseStringInput(occupation, 'occupation'),
  };

  return newProfile;
};

export default toNewPatient;