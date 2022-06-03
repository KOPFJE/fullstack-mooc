import { PatientEntry, DiagnosisEntry, Gender, NewEntry, Entry } from './types';

type PatientFields = { id: unknown, name: unknown, ssn?: unknown, dateOfBirth: unknown, occupation: unknown, gender: unknown, entries: unknown };
type DiagnosisFields = { code: unknown, name: unknown, latin: unknown };

const toNewPatientEntry = ({ id, name, ssn, dateOfBirth, occupation, gender, entries} : PatientFields): PatientEntry => {
  const newEntry: PatientEntry = {
    id: parseString(id),
    name: parseString(name),
    ssn: parseStringUndefined(ssn),
    dateOfBirth: parseString(dateOfBirth),
    occupation: parseString(occupation),
    gender: parseGender(gender),
    entries: parseEntries(entries)
  };
  return newEntry;
};

const toNewDiagnosisEntry = ({code, name, latin} : DiagnosisFields): DiagnosisEntry => {
    const newEntry: DiagnosisEntry = {
        code: parseString(code),
        name: parseString(name),
        latin: parseString(latin)
    };
    return newEntry;
  };

  const toNewEntry = ({...entry}):NewEntry  => {
    if(!entry.type) throw new Error("Not an entry!");
    let newEntry = null as unknown as NewEntry;
    console.log(entry.diagnosisCodes);
    switch(entry.type) {
        case "Hospital":
            newEntry = {
                description : entry.description,
                date : entry.date,
                specialist : entry.specialist,
                diagnosisCodes: entry.diagnosisCodes,
                type : entry.type,
                discharge : entry.discharge
            }
            break;
        case "HealthCheck":
            newEntry = {
                description : entry.description,
                date : entry.date,
                specialist : entry.specialist,
                diagnosisCodes : entry.diagnosisCodes,
                type : entry.type,
                healthCheckRating : entry.healthCheckRating
            }
            break;
        case "OccupationalHealthcare":
            newEntry = {
                description : entry.description,
                date : entry.date,
                specialist : entry.specialist,
                diagnosisCodes : entry.diagnosisCodes,
                type : entry.type,
                employerName : entry.employerName,
                sickLeave : entry.sickLeave
            }
            break;
        default:
            throw new Error("Not a valid entry.");
    }
    return newEntry as NewEntry;
  }

export {toNewPatientEntry, toNewDiagnosisEntry, toNewEntry };

const isString = (str: unknown): str is string => {
    return typeof str === 'string' || str instanceof String;
};

const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);    
}

const isEntries = (param: any):Entry[] => {
    if(!Array.isArray(param)) throw new Error('Incorrect value, not an array');
    return param as Array<Entry>;
}


const parseEntries = (entries: any): Entry[] => {
    if(!entries || !isEntries(entries)) {
        throw new Error('Incorrect or missing entries');
    }
    return entries;
}

const parseString = (str: any): string => {
    if(!str || !isString(str)) {
        throw new Error(`Given variable is not a string! Var: ${str}`);
    }
    return str;
}

const parseGender = (gender: unknown): Gender => {
    if(!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing gender');
    }
    return gender;
}

const parseStringUndefined = (str: any): string | undefined => {
    if(!str || !isString(str)) {
        throw new Error(`Given variable is not a string! Var: ${str}`);
    }
    return str;
}

