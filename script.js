document.getElementById('calculate').addEventListener('click', calculate);

function calculate() {
    const billInput = document.getElementById('bill').value.trim();
    const tipPercent = parseFloat(document.getElementById('tip').value);
    const peopleInput = document.getElementById('people').value.trim();
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    // Clear previous error
    errorDiv.classList.remove('show');
    errorDiv.textContent = '';

    // Edge case 1: empty bill
    if (billInput === '') {
        showError('请输入账单金额。');
        return;
    }

    const bill = parseFloat(billInput);

    // Edge case 2: invalid bill (NaN or negative)
    if (isNaN(bill) || bill < 0) {
        showError('请输入有效的非负金额。');
        return;
    }

    // Edge case 3: empty people
    if (peopleInput === '') {
        showError('请输入分摊人数。');
        return;
    }

    // Edge case 4: people must be an integer (not decimal like 1.5)
    if (!/^\d+$/.test(peopleInput)) {
        showError('人数必须是大于零的整数。');
        return;
    }

    const people = parseInt(peopleInput, 10);

    // Edge case 5: zero or negative people
    if (people <= 0) {
        showError('人数必须至少为 1。');
        return;
    }

    // Calculations (keep raw precision, round only for display)
    const tipAmount = bill * (tipPercent / 100);
    const total = bill + tipAmount;
    const perPerson = total / people;

    // Display results
    resultDiv.innerHTML = `
        <div class="result-row">
            <span>Tip Amount</span>
            <span class="value">$${tipAmount.toFixed(2)}</span>
        </div>
        <div class="result-row total">
            <span>Total Amount</span>
            <span class="value">$${total.toFixed(2)}</span>
        </div>
        <div class="result-row">
            <span>Total per Person</span>
            <span class="value">$${perPerson.toFixed(2)}</span>
        </div>
    `;

    function showError(msg) {
        errorDiv.textContent = msg;
        errorDiv.classList.add('show');
        resultDiv.innerHTML = '<span class="placeholder-text">请修正输入后重新计算。</span>';
    }
}

// Allow Enter key to trigger calculation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculate();
    }
});
