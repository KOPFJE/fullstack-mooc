import diagnoses from '../data/diagnoses.json';
import { DiagnosisEntry } from '../types';


const getDiagnosies = (): DiagnosisEntry[] => {
    return diagnoses;
};

const addDiagnosis = () => {
    return null;
};

export default {
    getDiagnosies,
    addDiagnosis
};