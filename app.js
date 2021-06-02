let submitBtn = document.getElementById('submit');

// bmiCalculator
bmiCalculator = (weight, height) => {
    let bmi = Math.round(weight / Math.pow(height, 2));
    bmiRange(bmi);
}

// bmiRange
bmiRange = (bmi) => {
    if (bmi < 18.5) {
        result = 'underweight';
        results.innerHTML = `Your BMI is ${bmi}, so you are ${result}.`
    } else if (18.5 <= bmi && bmi <= 24.9) {
        result = 'healthy';
        results.innerHTML = `Your BMI is ${bmi}, so you are ${result}.`
    } else if (25 <= bmi && bmi <= 29.9) {
        result = 'overweight';
        results.innerHTML = `Your BMI is ${bmi}, so you are ${result}.`
    } else if (30 <= bmi && bmi <= 34.9) {
        result = 'obese';
        results.innerHTML = `Your BMI is ${bmi}, so you are ${result}.`
    } else if (35 <= bmi) {
        result = 'extremely obese';
        results.innerHTML = `Your BMI is ${bmi}, so you are ${result}.`
    }
};

// submitButton
window.addEventListener('load', () =>{
    submitBtn.addEventListener('click', () => {
        let height = document.getElementById('height').value;
        let weight = document.getElementById('weight').value;
    
        bmiCalculator(weight, height)
    });
});

