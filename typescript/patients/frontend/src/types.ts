export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

interface BasicEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnosis['code']>;
}

interface HospitalEntry extends BasicEntry {
  type: 'Hospital';
  discharge: {
    date: string;
    criteria: string;
  };
}

interface OccupationalHealthcareEntry extends BasicEntry {
  type: "Occupational Healthcare";
  employerName: string;
  sickLeave?: SickLeave;
  healthRating: HealthRating;
}

interface SickLeave {
  startDate: string;
  endDate: string;
}

export enum HealthRating {
  Healthy = 0,
  LowRisk = 1,
  HighRisk = 2,
  CriticalRisk = 3,
}

export type Entry = HospitalEntry | OccupationalHealthcareEntry;

export interface Entries {
  entries: Entry[];
}

export interface HospitalEntryView {
  entry: HospitalEntry;
}

export interface OccupationalHealthcareEntryView {
  entry: OccupationalHealthcareEntry;
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries: Entry[]
}
