//* ==========================================================
//* CABO Buyer Dashboard
//* Level: localStorage, DOM updates, fetch(), table rendering
//* ==========================================================

// Check if user is logged in
let currentBuyer = JSON.parse(localStorage.getItem("loggedInBuyer"));

// If no buyer is logged in, provide a default demo profile so dashboard is functional
if (!currentBuyer) {
    currentBuyer = {
        contact: "Demo Procurement Officer",
        company: "Green Horizon Enterprises",
        email: "demo.buyer@cabo.demo",
        target: "10,000 tCO₂e"
    };
    localStorage.setItem("loggedInBuyer", JSON.stringify(currentBuyer));
}

// Populate user information in DOM
document.getElementById("buyerName").textContent = currentBuyer.contact;
document.getElementById("companyName").textContent = currentBuyer.company;
if (document.getElementById("buyerTarget")) {
    document.getElementById("buyerTarget").textContent = currentBuyer.target || "10,000 tCO₂e";
}

// Load and display transactions from localStorage
function loadTransactions() {
    let allTransactions = JSON.parse(localStorage.getItem("buyerTransactions")) || [];

    // Filter transactions for current buyer
    let userTransactions = allTransactions.filter(function(item) {
        return item.buyerEmail === currentBuyer.email;
    });

    const tbody = document.getElementById("transactionList");
    if (!tbody) return;

    tbody.innerHTML = "";

    let totalPurchased = 0;

    if (userTransactions.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; color: #8fa08c; padding: 2em;">
                    No transactions recorded yet. Browse available credits below to make a demo purchase.
                </td>
            </tr>
        `;
    } else {
        userTransactions.forEach(function(tx) {
            let row = document.createElement("tr");

            row.innerHTML = `
                <td><strong>${tx.source}</strong></td>
                <td>${tx.location || 'India'}</td>
                <td><span style="color: #4ade80; font-weight: bold;">${tx.credits} CC</span></td>
                <td>₹${(tx.amount || tx.credits * 850).toLocaleString()}</td>
                <td><span class="badge-verified">${tx.status || 'Verified Settlement'}</span></td>
            `;

            tbody.appendChild(row);
            totalPurchased += Number(tx.credits);
        });
    }

    // Update purchased credits count in metric box
    const purchasedElem = document.getElementById("purchasedCredits");
    if (purchasedElem) {
        purchasedElem.textContent = totalPurchased + " CC";
    }
}

// Fetch available carbon credits from local JSON file and render table
function loadAvailableCredits() {
    fetch("data/credits-data.json")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            const tableBody = document.getElementById("creditList");
            if (!tableBody) return;

            tableBody.innerHTML = "";
            let totalAvailable = 0;

            data.credits.forEach(function(item) {
                totalAvailable += Number(item.available);

                let row = document.createElement("tr");

                row.innerHTML = `
                    <td>
                        <strong>${item.source}</strong>
                        <div style="font-size: 0.8em; color: #8fa08c;">${item.type || 'Rooftop Solar'}</div>
                    </td>
                    <td>${item.location}</td>
                    <td><span class="available-val" style="color: #4ade80;">${item.available} CC</span></td>
                    <td><strong>${item.priceDisplay || ('₹' + item.price + ' / CC')}</strong></td>
                    <td>
                        <button class="button-primary buy-table-btn" style="padding: 0.4em 1em; font-size: 0.85em;">
                            Procure 10 CC
                        </button>
                    </td>
                `;

                // Handle click on Procure button
                const buyBtn = row.querySelector(".buy-table-btn");
                buyBtn.addEventListener("click", function() {
                    if (item.available < 10) {
                        alert("Not enough credits remaining in this batch!");
                        return;
                    }

                    // Deduct 10 credits locally
                    item.available -= 10;
                    row.querySelector(".available-val").textContent = item.available + " CC";

                    // Record transaction
                    const newTx = {
                        id: Date.now(),
                        source: item.source,
                        location: item.location,
                        credits: 10,
                        amount: 10 * item.price,
                        buyerEmail: currentBuyer.email,
                        buyerName: currentBuyer.contact,
                        date: new Date().toLocaleDateString(),
                        status: "Verified Settlement"
                    };

                    let allTx = JSON.parse(localStorage.getItem("buyerTransactions")) || [];
                    allTx.push(newTx);
                    localStorage.setItem("buyerTransactions", JSON.stringify(allTx));

                    // Alert user and update dashboard
                    alert(`Purchase confirmed! Procured 10 CC from ${item.source}.`);
                    loadTransactions();

                    // Update total available counter
                    totalAvailable -= 10;
                    document.getElementById("availableCredits").textContent = totalAvailable + " CC";
                });

                tableBody.appendChild(row);
            });

            document.getElementById("availableCredits").textContent = totalAvailable + " CC";
        })
        .catch(function(err) {
            console.error("Error loading available credits:", err);
        });
}

// Export Transactions to JSON file functionality
const exportTxBtn = document.getElementById("exportTransactionsBtn");
if (exportTxBtn) {
    exportTxBtn.addEventListener("click", function() {
        let allTx = JSON.parse(localStorage.getItem("buyerTransactions")) || [];
        let userTx = allTx.filter(function(t) { return t.buyerEmail === currentBuyer.email; });

        if (userTx.length === 0) {
            alert("No transactions available to export yet.");
            return;
        }

        const blob = new Blob([JSON.stringify(userTx, null, 4)], { type: "application/json" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `cabo_transactions_${currentBuyer.company.replace(/\s+/g, '_').toLowerCase()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);
    });
}

// Initialize on page load
loadTransactions();
loadAvailableCredits();

