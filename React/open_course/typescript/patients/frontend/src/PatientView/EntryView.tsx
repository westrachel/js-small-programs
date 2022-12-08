import { Entries, Entry } from '../types';
import OHEntryView from './OHEntryView';
import HEntryView from './HEntryView';
import { useStateValue } from "../state";
import { Diagnosis } from '../types';

const EntryView = ({entries}: Entries) => {
  const [{ diagnoses }] = useStateValue();

  const diagnosisDetails = (code: string): string => {
    const details = Object.values(diagnoses).find((diagnosis: Diagnosis) => {
      return diagnosis.code === code;
    });
    return details ? details.name : '';
  };

  const renderEntryDetails = (entry: Entry) => {
    switch (entry.type) {
      case 'Hospital':
        return <HEntryView entry={entry} />;
        break;
      case 'Occupational Healthcare':
        return <OHEntryView entry={entry} />;
        break;
      default:
        return assertNever(entry);
    }
  };

  const assertNever = (value: never): never => {
    throw new Error(`Unhandled entry type: ${JSON.stringify(value)}`);
  };

  const renderDiagnosisCodes = (entry: Entry) => {
    if (entry.diagnosisCodes) {
      return (entry.diagnosisCodes.map(diagnosis => {
        return (
          <li key={diagnosis}>
            {diagnosis}: {diagnosisDetails(diagnosis)}
          </li>
        );
      }));
    }
  };

  return (
    <>
      {entries.map((entry, idx) => {
        return (<ul key={entry.id}>
          <b>Entry #{idx}:</b>
          <li>Date:{entry.date}</li>
          <li><em>{entry.description}</em></li>
          {renderEntryDetails(entry)}
          <li>Diagnosed by: {entry.specialist}</li>
          {renderDiagnosisCodes(entry)}
        </ul>);
      })}
    </>
  );
};

export default EntryView;
