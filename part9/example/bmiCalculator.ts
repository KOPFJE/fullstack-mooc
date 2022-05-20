const calculateBmi = (cm: number, kg: number): string => {
    const m = (cm / 100);
    const bmi = kg / (m*m);
    const bmiValues = [
        {
            value : 16.0,
            category : "Underweight (Severe thinness)"
        },
        {
            value : 16.9,
            category : "Underweight (Moderate thinness)"
        },
        {
            value : 18.4,
            category : "Underweight (Mild thinness)"
        },
        {
            value : 24.9,
            category : "Normal range"
        },
        {
            value : 29.9,
            category : "Overweight (Pre-obese)"
        },
        {
            value : 34.9,
            category : "Obese (Class I)"
        },
        {
            value : 39.9,
            category : "Obese (Class II)"
        },
        {
            value : 9000.0,
            category : "Obese (Class III)"
        }
    ];
    for(const calc of bmiValues) {   
        if(bmi < calc.value) {
            return `${bmi.toFixed(2)} - ${calc.category}`;
        }
    }
    return `${bmi.toFixed(2)} - Obese (Class III)`;
};

export { calculateBmi };

const startCalculator = () => {
    if(process.argv.length > 0) {
        if (process.argv.length<4) {
            console.log('Give weight as kg and height as cm in that order.');
            return;
        }

        const weight = parseFloat(process.argv[2]);
        const height = parseFloat(process.argv[3]);

        console.log(`${weight}kg - ${height}cm`);
        console.log(calculateBmi(height, weight));
    }
};

startCalculator();