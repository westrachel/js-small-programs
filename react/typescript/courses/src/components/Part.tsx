import { CoursePart, PartDetails } from '../types'

const Part = ({part}: PartDetails) => {

  const renderPartDetails = (part: CoursePart) => {
    switch (part.type) {
      case "normal":
        return concatDetails(part.description, '');
        break;
      case "groupProject":
        return `Project exercises: ${part.groupProjectCount}`;
        break;
      case "submission":
        return (
          concatDetails(part.description,
                       `Submit to: ${part.exerciseSubmissionLink}`)
        );
        break;
      case "special":
        return (
          concatDetails(part.description, 
                        `required skills: ${part.requirements}`)
        );
        break;
      default:
        return assertNever(part);
    }
  };

  const concatDetails = (description: string, otherDetails: string | null) => {
    return otherDetails 
             ? <><em>{description}</em><br/>{otherDetails}</> 
             : <em>{description}</em>;
  };

  const assertNever = (value: never): never => {
    throw new Error(`Unhandled course part: ${JSON.stringify(value)}`)
  };

  return (
    <>
      <b>{part.name} {part.exerciseCount}</b>
      <br/>
      {renderPartDetails(part)}
    </>
  );
};

export default Part;
