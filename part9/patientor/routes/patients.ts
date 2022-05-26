import patientService from '../services/patientservices';
import express from 'express';
import {v1 as uuid} from 'uuid';
import { toNewPatientEntry } from '../utils';
import { PatientEntry, PatientEntryPublic } from '../types';

const router = express.Router();
const id = uuid();

const patientsNS : PatientEntryPublic[] = patientService.getPatientsPublic();
const patients : PatientEntry[] = patientService.getPatients();

router.get('/', (_req, res) => {
    res.send(patientsNS);
});

router.get('/:id', (req, res) => {
    const id : string = req.params.id;
    try {
        const patient = patients.find(patient => id === patient.id);
        if(!patient) throw new Error("Wrong id!");
        res.status(200).json(patient);
    } catch (error: unknown) {
        let errorMsg = 'Something went wrong. ';
        if(error instanceof Error) {
            errorMsg += 'Error ' + error.message;
        }
        res.status(404).send(errorMsg);
    }
});

router.post('/', (req, res) => {
    try {
        const newPatientEntry = req.body;
        newPatientEntry.id = id;
        newPatientEntry.entries = [];

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
            formatedEntry.entries
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