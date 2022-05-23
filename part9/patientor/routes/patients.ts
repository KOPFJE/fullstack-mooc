import patientService from '../services/patientservices';
import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getPatientsNonSensitivite());
});

router.post('/', (_req, res) => {
    res.send("Sending a diagnosis!");
});

export default router;