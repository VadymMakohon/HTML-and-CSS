const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

const li = document.createElement("li");
li.innerHTML = `${name} - $${amount.toFixed(2)} 
        <button class="remove">❌</button>`;