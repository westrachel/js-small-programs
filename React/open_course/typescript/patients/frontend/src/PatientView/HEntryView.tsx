import { HospitalEntryView } from '../types';

const HEntryView = ({entry}: HospitalEntryView ) => {

  return (
    <>
     <li>Discharged on {entry.discharge.date} because {entry.discharge.criteria}</li>
    </>
  );
};

export default HEntryView;
