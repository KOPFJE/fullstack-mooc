export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other',
}

export interface PatientEntry {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn?: string;
    gender: Gender;
    occupation: string;
}

export type PatientEntryNonSensitivite = Omit<PatientEntry, 'ssn'>;

export interface DiagnosisEntry {
    code: string;
    name: string;
    latin?: string;
}
