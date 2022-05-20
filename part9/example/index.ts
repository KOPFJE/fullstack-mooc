import express from 'express';
import bodyParser from 'body-parser';
import { calculateBmi } from './bmiCalculator';
import { calculateExercise } from './exerciseCalculator';

const checkArray = (type:string, arr:Array<any>):boolean => {
    let isArrayNumber = false;
    isArrayNumber = arr.length > 0 && arr.every((value) => {
        value = parseFloat(value);
        return typeof value === type;
    });
    return isArrayNumber;
}

const app = express();
app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
    res.send("pong!");
});
app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});
app.get('/bmi', (req, res) => {
    const height = req.query.height;
    const weight = req.query.weight;

    if(typeof height !== "string" || typeof weight !== "string") {
        res.status(400).send({
            error : "Malformatted parameters"
        });
    } else {
        const bmi = calculateBmi(parseFloat(height), parseFloat(weight));
        res.send(
            {
                weight : weight,
                height : height,
                bmi : bmi
            }
        );
    }
});

app.post('/exercises', (req, res) => {
    const data = req.body;

    if(data.target === undefined || data.daily_exercises === undefined) {
        res.status(400).send({
            error: "Parameters missing"
        }).end();
    }

    const target = data.target;
    const dailyExercises = data.daily_exercises;

    if(typeof target !== "number" || !checkArray("number", dailyExercises)) {
        res.status(400).send({
            error : "Malformatted parameters"
        }).end();
    }

    const exerciseData = calculateExercise(dailyExercises, target);
    res.status(200).send(exerciseData).end();
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});