// ----- State -----
// Default matches the button marked "active" in index.html
let tipPercent = 15;

const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const resultDiv = document.getElementById('result');
const errorDiv = document.getElementById('error');
const tipButtons = document.querySelectorAll('.tip-btn');

// ----- Tip percentage buttons -----
tipButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        tipButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        tipPercent = parseFloat(btn.dataset.tip);
    });
});

document.getElementById('calculate').addEventListener('click', calculate);

function showError(msg) {
    errorDiv.textContent = msg;
    errorDiv.classList.add('show');
    resultDiv.innerHTML = '<span class="placeholder-text">Please fix the input above and try again.</span>';
}

function clearError() {
    errorDiv.classList.remove('show');
    errorDiv.textContent = '';
}

function calculate() {
    const billValue = billInput.value.trim();
    const peopleValue = peopleInput.value.trim();

    clearError();

    // Edge case 1: empty bill
    if (billValue === '') {
        showError('Please enter the bill amount.');
        return;
    }

    const bill = parseFloat(billValue);

    // Edge case 2: invalid bill (NaN, negative, or not finite)
    if (isNaN(bill) || !isFinite(bill) || bill < 0) {
        showError('Please enter a valid, non-negative amount.');
        return;
    }

    // Edge case 3: empty people
    if (peopleValue === '') {
        showError('Please enter the number of people.');
        return;
    }

    // Edge case 4: people must be an integer (not a decimal like 1.5)
    if (!/^\d+$/.test(peopleValue)) {
        showError('Number of people must be a whole number greater than zero.');
        return;
    }

    const people = parseInt(peopleValue, 10);

    // Edge case 5: zero people
    if (people <= 0) {
        showError('Number of people must be at least 1.');
        return;
    }

    // Calculations (keep raw precision, round only for display)
    const tipAmount = bill * (tipPercent / 100);
    const total = bill + tipAmount;
    const perPerson = total / people;

    // Display results
    resultDiv.innerHTML = `
        <div class="result-row">
            <span class="label">Tip Amount (${tipPercent}%)</span>
            <span class="value">$${tipAmount.toFixed(2)}</span>
        </div>
        <div class="result-row total">
            <span class="label">Total Amount</span>
            <span class="value">$${total.toFixed(2)}</span>
        </div>
        <div class="result-row">
            <span class="label">Total per Person</span>
            <span class="value">$${perPerson.toFixed(2)}</span>
        </div>
    `;
    resultDiv.classList.add('show');
}

// Allow Enter key to trigger calculation
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calculate();
    }
});
