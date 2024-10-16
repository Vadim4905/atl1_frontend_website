document.getElementById('exchange-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    const rates = {
        USD: { EUR: 0.85, GBP: 0.75 },
        EUR: { USD: 1.18, GBP: 0.88 },
        GBP: { USD: 1.33, EUR: 1.14 }
    };

    if (fromCurrency !== toCurrency) {
        const conversionRate = rates[fromCurrency][toCurrency];
        const convertedAmount = (amount * conversionRate).toFixed(2);
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } else {
        document.getElementById('result').innerText = 'Please select different currencies.';
    }
});

// Toggle colorblind mode
document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('colorblind');
});
