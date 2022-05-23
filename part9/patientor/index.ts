import express from 'express';
import diagnosisRouter from './routes/diagnosies';
import patientRouter from './routes/patients';

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get("/api/ping", (_req, res) => {
    console.log("Pinged at /ping!");
    res.send("Pong!");
});

app.use("/api/patients", patientRouter);

app.use('/api/diagnoses', diagnosisRouter);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});