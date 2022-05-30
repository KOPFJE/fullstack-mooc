import { PatientEntry, DiagnosisEntry, Gender, Entry } from './types';

type PatientFields = { id: unknown, name: unknown, ssn: unknown, dateOfBirth: unknown, occupation: unknown, gender: unknown, entries: unknown };
type DiagnosisFields = { code: unknown, name: unknown, latin: unknown };

const toNewPatientEntry = ({ id, name, ssn, dateOfBirth, occupation, gender, entries} : PatientFields): PatientEntry => {
  const newEntry: PatientEntry = {
    id: parseId(id),
    name: parseName(name),
    ssn: parseSSN(ssn),
    dateOfBirth: parseId(dateOfBirth),
    occupation: parseOccupation(occupation),
    gender: parseGender(gender),
    entries: parseEntries(entries)
  };
  return newEntry;
};

const toNewDiagnosisEntry = ({code, name, latin} : DiagnosisFields): DiagnosisEntry => {
    const newEntry: DiagnosisEntry = {
        code: parseCode(code),
        name: parseName(name),
        latin: parseLatin(latin)
    };
    return newEntry;
  };

export {toNewPatientEntry, toNewDiagnosisEntry };

const isString = (str: unknown): str is string => {
    return typeof str === 'string' || str instanceof String;
};

const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);    
}

const isEntry = (param: any): param is Entry => {
    if(!param) return false;
    if(!param.diagnosis) return false;
    return true;
}

const isEntries = (param: any): param is Entry[] => {
    if(Array.isArray(param)) {
        if(param.length == 0) return true;
        for(let elem of param) {
            if(!isEntry(elem)) return false;           
        }
    }
    return false;
}

const parseEntries = (entries: any): Entry[] => {
    if(!entries || !isEntries(entries)) {
        throw new Error('Incorrect or missing entries');
    }
    return entries;
}

const parseCode = (code: any): string => {
    if(!code || !isString(code)) {
        throw new Error('Incorrect or missing code');
    }
    return code;
}
const parseName = (name: any): string => {
    if(!name || !isString(name)) {
        throw new Error('Incorrect or missing name');
    }
    return name;
}

const parseLatin = (latin: any): string => {
    if(!latin || !isString(latin)) {
        throw new Error('Incorrect or missing latin');
    }
    return latin;
}
const parseGender = (gender: unknown): Gender => {
    if(!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing gender');
    }
    return gender;
}

const parseOccupation = (occupation: any): string => {
    if(!occupation || !isString(occupation)) {
        throw new Error('Incorrect or missing occupation');
    }
    return occupation;
}

const parseId = (id: any): string => {
    if(!id || !isString(id)) {
        throw new Error('Incorrect or missing id');
    }
    return id;
}

const parseSSN = (ssn: any): string | undefined => {
    if(!ssn || !isString(ssn)) {
        throw new Error('Incorrect or missing ssn');
    }
    return ssn;
}

