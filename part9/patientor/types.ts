export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other',
}

export interface Entry {
    diagnosis: DiagnosisEntry;
}

export interface PatientEntry {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn?: string;
    gender: Gender;
    occupation: string;
    entries: Entry[];
}

export type PatientEntryPublic = Omit<PatientEntry, 'ssn' | 'entries'>;

export interface DiagnosisEntry {
    code: string;
    name: string;
    latin?: string;
}
