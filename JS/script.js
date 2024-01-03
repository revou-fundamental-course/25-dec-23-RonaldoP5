// Function to calculate Luas
function calculateLuas() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height)) {
        alert('Masukkan angka yang valid untuk alas dan tinggi.');
        return;
    }

    var area = (base * height) / 2;
    displayLuasResult(base, height, area);
}

// Function to display Luas result
function displayLuasResult(base, height, area) {
    var luasFormula = 'Luas = 1/2 x ' + base + ' x ' + height;
    var luasCalculation = 'Luas = ' + area.toFixed(2);

    document.getElementById('luas-formula').innerText = luasFormula;
    document.getElementById('luas-calculation').innerText = luasCalculation;
}

// Function to reset Luas form
function resetLuasForm() {
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';
    document.getElementById('luas-formula').innerText = '';
    document.getElementById('luas-calculation').innerText = '';
}

// Function to calculate Keliling
function calculateKeliling() {
    var side1 = parseFloat(document.getElementById('side1').value);
    var side2 = parseFloat(document.getElementById('side2').value);
    var side3 = parseFloat(document.getElementById('side3').value);

    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        alert('Masukkan angka yang valid untuk sisi-sisi segitiga.');
        return;
    }

    // Check if the given sides form a valid triangle
    if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
        var circumference = side1 + side2 + side3;
        displayKelilingResult(side1, side2, side3, circumference);
    } else {
        alert('Sisi-sisi yang diberikan tidak membentuk segitiga yang valid.');
    }
}

// Function to display Keliling result
function displayKelilingResult(side1, side2, side3, circumference) {
    var kelilingFormula = 'Keliling = ' + side1 + ' + ' + side2 + ' + ' + side3;
    var kelilingCalculation = 'Keliling = ' + circumference.toFixed(2);

    document.getElementById('keliling-formula').innerText = kelilingFormula;
    document.getElementById('keliling-calculation').innerText = kelilingCalculation;
}

// Function to reset Keliling form
function resetKelilingForm() {
    document.getElementById('side1').value = '';
    document.getElementById('side2').value = '';
    document.getElementById('side3').value = '';
    document.getElementById('keliling-formula').innerText = '';
    document.getElementById('keliling-calculation').innerText = '';
}

// Event listener untuk reset button pada Luas
document.getElementById('resetLuasButton').addEventListener('click', resetLuasForm);

// Event listener untuk reset button pada Keliling
document.getElementById('resetKelilingButton').addEventListener('click', resetKelilingForm);