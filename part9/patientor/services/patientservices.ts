import patients from '../data/patients.json';
import { PatientEntryNonSensitivite, PatientEntry, Gender } from '../types'
import { toNewPatientEntry } from '../utils';

const getPatients : Array<PatientEntry> = patients.map(obj => {
    const object = toNewPatientEntry(obj) as PatientEntry;
    object.id = obj.id;
    return object;
});

const getPatientsNonSensitivite = (): PatientEntryNonSensitivite[] => {

    return getPatients.map((
            { id, name, dateOfBirth, gender, occupation } : 
            {id:string, name:string, dateOfBirth:string, gender:Gender, occupation:string}
        ) => ({
            id,
            name,
            dateOfBirth,
            gender,
            occupation
        }
    ));
};

const addPatient = (id:string, name:string, dateOfBirth:string, ssn:string, gender: Gender, occupation:string):PatientEntry => {
    const newPatientEntry = {
        id: id,
        name: name,
        dateOfBirth: dateOfBirth,
        ssn: ssn,
        gender: gender,
        occupation: occupation
    };
    patients.push(newPatientEntry);
    return newPatientEntry;
};

export default {
    getPatients,
    getPatientsNonSensitivite,
    addPatient
};
