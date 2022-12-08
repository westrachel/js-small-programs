import { useParams } from "react-router-dom";
import { useStateValue } from '../state';
import { Patient } from '../types';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import WcIcon from '@mui/icons-material/Wc';
import EntryView from './EntryView';

const PatientView = () => {
  const { id } = useParams<{ id: string }>();
  const [{ patients }] = useStateValue(); 

  const patient = Object.values(patients).find((patient: Patient) => {
    return id === patient.id;
  });

  const genderIcon = () => {
    if (!patient) { return; }
    const gender = patient.gender;
    let icon = gender === 'male' ? <MaleIcon /> : <WcIcon />;
    icon = gender === 'female' ? <FemaleIcon /> : icon;

    return icon;
  };

  if (!patient) {
    return <div>No Patient Details</div>;
  }

  return (
    <>
      <h2>{patient.name}{genderIcon()}</h2>
      <p>occupation: {patient.occupation}</p>
      <h3>Entries:</h3>
      <EntryView entries={patient.entries} />
    </>
  );
};

export default PatientView;
