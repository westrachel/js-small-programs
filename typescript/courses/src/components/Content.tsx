import { CoursePart, CourseParts } from '../types'
import Part from './Part'

const Content = ({ courseParts }: CourseParts) => {

  const total = courseParts.reduce((total: number, part: CoursePart): number => {
    return total + part.exerciseCount;
  }, 0);

  return (
    <div>
        {courseParts.map((part: CoursePart) => {
           return (
             <p key={part.name}>
               <Part part={part} />
             </p>
           );
         })
        }
      <b>Total Number of Exercises: {total}</b>
    </div>
  );
};

export default Content;
