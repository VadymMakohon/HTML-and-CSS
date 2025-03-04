document.getElementById("addExpense").addEventListener("click", function () {
    const name = document.getElementById("expenseName").value.trim();
    const amount = parseFloat(document.getElementById("expenseAmount").value);

    if (name === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid expense name and amount.");
        return;
    }

    const expenseList = document.getElementById("expenseList");
    const totalAmount = document.getElementById("totalAmount");

    const li = document.createElement("li");
    li.innerHTML = `${name} - $${amount.toFixed(2)} 
        <button class="remove">❌</button>`;