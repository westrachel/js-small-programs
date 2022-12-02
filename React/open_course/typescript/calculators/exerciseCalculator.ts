interface TrainingEvaluation {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const numDaysTrained = (hoursPerDayArr: number[]): number => {
  return hoursPerDayArr.filter(hours => hours != 0).length;
}

const avgHours = (arr: number[]): number => {
  const total = arr.reduce((total, hours) => total + hours, 0);
  return total / arr.length;
}

class Rating {
  constructor(public success: boolean, public rating: number, public ratingDescription: string) {
    this.success = success;
    this.rating = rating;
    this.ratingDescription = ratingDescription;
  }
}

const successRating = new Rating(true, 1, 'good stuff');
const okayRating = new Rating(false, 2, 'not too bad but could be better');
const badRating = new Rating(false, 3, 'needs more work');

const rateTraining = (target: number, avg: number) => {
  if (avg >= target) {
    return successRating;
  } else if (avg > 0.75 * target) {
    return okayRating;
  } else {
    return badRating;
  }
};

const parseInputs = (elements: string[]): number[] => {
  const anyInvalid = elements.some(num => isNaN(Number(num)));

  if (anyInvalid) {
    throw new Error("Invalid training log entered! Please provide numerical inputs only.");
  } else {
    return elements.map(stringNum => Number(stringNum));
  }
}

const calcExercises = (nums: number[]): TrainingEvaluation => {
  const target = nums[0];
  const hoursPerDay = nums.slice(1);
  const average = avgHours(hoursPerDay);
  const { success, rating, ratingDescription } = rateTraining(target, average);
  

  return {
    periodLength: hoursPerDay.length,
    trainingDays: numDaysTrained(hoursPerDay),
    success,
    rating,
    ratingDescription,
    target,
    average
  };

}


try {
  const numbers: number[] = parseInputs(process.argv.slice(2));
  console.log(calcExercises(numbers));
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(`Error: ${error.message}`);
  } else {
    console.log('Something is wrong');
  } 
}


