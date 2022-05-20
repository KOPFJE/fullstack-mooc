import express from 'express';
import { calculateBmi } from './bmiCalculator';

const app = express();
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
        let bmi = calculateBmi(parseFloat(height), parseFloat(weight));
        res.send(
            {
                weight : weight,
                height : height,
                bmi : bmi
            }
        );
    };

});
const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});