import diagnoses from '../data/diagnoses.json';
import { DiagnosisEntry } from '../types';


const getDiagnosies = (): DiagnosisEntry[] => {
    return diagnoses;
};

const getDiagnosis = (code:string): DiagnosisEntry => {
    const diag = diagnoses.find(diag => code === diag.code);
    if(!diag) {
        throw new Error("No code found.");
    }
    return diag; 
}

const addDiagnosis = () => {
    return null;
};

export default {
    getDiagnosies,
    addDiagnosis,
    getDiagnosis
};