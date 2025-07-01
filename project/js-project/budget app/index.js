
    let balance = 0;
    let balanceEl = document.getElementById('balance');
    let transactionList = document.getElementById('transactionList');

    function addTransaction() {
      let desc = document.getElementById('desc').value;
      let amount = parseFloat(document.getElementById('amount').value);
      let type = document.getElementById('type').value;

     if (type === 'expense' && amount > balance) {
    alert("Your balance is insufficient.");
    return;
  }

      if (!desc || isNaN(amount)) {
        alert("Please enter valid description and amount.");
        return;
      }

      let listItem = document.createElement('li');
      listItem.className = type === 'income' ? 'income' : 'expense';
      listItem.innerHTML = `
        ${desc} 
        <span>${type === 'income' ? '+' : '-'}₹${amount.toFixed(2)}</span>
      `;

      transactionList.appendChild(listItem);

      if (type === 'income') {
        balance += amount;
      } else {
        balance -= amount;
      }

      balanceEl.textContent = balance.toFixed(2);

      document.getElementById('desc').value = '';
      document.getElementById('amount').value = '';
    }
