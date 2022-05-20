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
    if(typeof req.query.height !== "string" || typeof req.query.weight !== "string") throw console.error;
    const height = parseFloat(req.query.height);
    const weight = parseFloat(req.query.weight);
    let bmi = calculateBmi(height, weight);
    res.send(
        {
            weight : weight,
            height : height,
            bmi : bmi
        }
    );

});
const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});