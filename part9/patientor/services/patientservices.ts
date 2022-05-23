import patients from '../data/patients.json';
import { PatientEntryNonSensitivite, PatientEntry} from '../types'

const getPatients = (): PatientEntry[] => {
    return patients;
};

const getPatientsNonSensitivite = (): PatientEntryNonSensitivite[] => {

    return patients.map((
            { id, name, dateOfBirth, gender, occupation } : 
            {id:string, name:string, dateOfBirth:string, gender:string, occupation:string}
        ) => ({
            id,
            name,
            dateOfBirth,
            gender,
            occupation
        }
    ));
};

const addPatient = () => {
    return null;
};

export default {
    getPatients,
    getPatientsNonSensitivite,
    addPatient
};
