import patients from '../data/patients.json';
import { PatientEntryPublic, PatientEntry, Gender, Entry } from '../types'
import { toNewPatientEntry } from '../utils';

const patientsArr : Array<PatientEntry> = patients.map(obj => {
    const object = toNewPatientEntry(obj) as PatientEntry;
    object.id = obj.id;
    return object;
});

const getPatients = ():PatientEntry[] => {
    return patientsArr;
}

const getPatientsPublic = (): PatientEntryPublic[] => {

    return patientsArr.map((
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

const addPatient = (id:string, name:string, dateOfBirth:string, ssn:string, gender: Gender, occupation:string, entries: Entry[]):PatientEntry => {
    const newPatientEntry = {
        id: id,
        name: name,
        dateOfBirth: dateOfBirth,
        ssn: ssn,
        gender: gender,
        occupation: occupation,
        entries: entries
    };
    patientsArr.push(newPatientEntry);
    return newPatientEntry;
};

export default {
    getPatients,
    getPatientsPublic,
    addPatient
};
