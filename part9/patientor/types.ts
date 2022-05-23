export interface PatientEntry {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn?: string;
    gender: string;
    occupation: string;
}

export type PatientEntryNonSensitivite = Omit<PatientEntry, 'ssn'>;

export interface DiagnosisEntry {
    code: string;
    name: string;
    latin?: string;
}