const calculateExercise = (hours:Array<number>, target:number) => {
    let sum = 0;
    hours.map(day => sum += day);
    let average = sum/hours.length;
    let rating =  Math.floor(average / target);
    if (rating > 3) rating = 3;
    let ratingDescriptions = [
        "Not good enough, failed.",
        "Acceptable, but you can do better!",
        "Good, but you have still to improve!",
        "Great! Well done!"
    ];

    return {
        periodLength : hours.length,
        trainingDays : hours.filter(num => num > 0),
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

