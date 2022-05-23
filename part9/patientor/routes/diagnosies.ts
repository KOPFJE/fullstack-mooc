import diagnosisService from '../services/diagnosisservices';
import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(diagnosisService.getDiagnosies());
});

router.post('/', (_req, res) => {
    res.send("Sending a diagnosis!");
});

export default router;