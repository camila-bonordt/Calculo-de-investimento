function calculateInvestment() {
    const investment = parseFloat(document.getElementById('investment').value);
    const durationType = document.querySelector('input[name="duration"]:checked').value;
    const time = parseInt(document.getElementById('time').value);
    const cdi = parseFloat(document.getElementById('cdi').value);

    let total = 0;
    let resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';

    let months = durationType === 'months' ? time : time * 12;

    for (let i = 1; i <= months; i++) {
        total += investment * (1 + cdi / 100 / 12);

        if (durationType === 'months' || (durationType === 'years' && i % 12 === 0)) {
            const displayMonth = durationType === 'months' ? i : i / 12;
            resultContainer.innerHTML += `Ao final do ${displayMonth} ${durationType === 'months' ? 'mês' : 'ano'}: R$ ${total.toFixed(2)}<br>`;
        }
    }
}
