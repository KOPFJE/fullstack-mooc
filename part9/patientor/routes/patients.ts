import patientService from '../services/patientservices';
import express from 'express';
import {v1 as uuid} from 'uuid';
import { toNewPatientEntry } from '../utils';

const router = express.Router();
const id = uuid();

router.get('/', (_req, res) => {
    res.send(patientService.getPatientsNonSensitivite());
});

router.post('/', (req, res) => {
    try {
        const newPatientEntry = req.body;
        newPatientEntry.id = id;

        const formatedEntry = toNewPatientEntry(
            newPatientEntry
        );

        if(!formatedEntry.ssn) throw new Error("Missing ssn!");

        patientService.addPatient(
            formatedEntry.id,
            formatedEntry.name,
            formatedEntry.ssn,
            formatedEntry.dateOfBirth,
            formatedEntry.gender,
            formatedEntry.occupation,
        );
        res.status(200).send(formatedEntry);
    } catch(error: unknown) {
        let errorMsg = 'Something went wrong. ';
        if (error instanceof Error) {
            errorMsg += 'Error: ' + error.message;
        }
        res.status(400).send(errorMsg);
    }
});

export default router;