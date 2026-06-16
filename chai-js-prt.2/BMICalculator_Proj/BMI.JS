let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#result');

    if (isNaN(height) || height <= 0) {
        console.log('Enter a valid height');
        result.textContent = 'Enter a valid height';
    } else if (isNaN(weight) || weight <= 0) {
        console.log('Enter a valid weight');
        result.textContent = 'Enter a valid weight';
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.textContent = `BMI: ${bmi}`;
    }
});