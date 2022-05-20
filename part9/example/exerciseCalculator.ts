interface ExerciseResult {
    periodLength?: number;
    trainingDays?: number,
    success?: boolean,
    rating?: number,
    ratingDescription?: string,
    target?: number,
    average?: number
}

const calculateExercise = (hours:Array<number>, target:number): ExerciseResult => {
    let sum = 0;
    hours.map(day => sum += day);
    let average = sum/hours.length;
    
    let rating =  Math.floor(average / target);
    let ratingDescriptions = [
        "Not good enough, failed.",
        "Acceptable, but you can do better!",
        "Good, but you have still room to improve!",
        "Great! Well done!"
    ];
    if (rating > ratingDescriptions.length) rating = ratingDescriptions.length;

    return {
        periodLength : hours.length,
        trainingDays : hours.filter(num => num > 0).length,
        success : (rating > 0),
        rating : rating,
        ratingDescription : ratingDescriptions[rating],
        target: target,
        average: average
    };
};

if (process.argv.length<10) {
    console.log('Give the target daily hours and amount of exercised per day for n amount of days.');
    process.exit(1);
  };

const hours = [];
const target = parseFloat(process.argv[2]);

for(let i = 3; i < process.argv.length; i++) {
    hours.push(parseFloat(process.argv[i]));
}

console.log(calculateExercise(hours, target));

