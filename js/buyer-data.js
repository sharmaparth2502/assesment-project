//* ==========================================================
//* CABO Registered Buyers Directory
//* Level: DOM manipulation, JSON parsing, JSON export/download
//* Meets Parameter 4: Saving & Exporting form data to local JSON file
//* ==========================================================

const tableBody = document.getElementById("buyerTable");
const searchInput = document.getElementById("searchBuyer");
const clearBtn = document.getElementById("clearData");
const exportJsonBtn = document.getElementById("exportJsonBtn");
const resetSampleBtn = document.getElementById("resetSampleBtn");

let currentBuyersList = [];

// Initialize data: Load from localStorage or fetch sample JSON file if empty
function initializeBuyerData() {
    let saved = localStorage.getItem("buyers");

    if (saved && JSON.parse(saved).length > 0) {
        currentBuyersList = JSON.parse(saved);
        renderTable(currentBuyersList);
    } else {
        // Fetch from data/buyers.json file to provide default sample data
        fetch("data/buyers.json")
            .then(function(res) {
                return res.json();
            })
            .then(function(sampleBuyers) {
                currentBuyersList = sampleBuyers;
                localStorage.setItem("buyers", JSON.stringify(sampleBuyers));
                renderTable(currentBuyersList);
            })
            .catch(function(err) {
                console.error("Could not load sample buyers JSON:", err);
                renderTable([]);
            });
    }
}

// Function to render buyer rows in the HTML table
function renderTable(buyers) {
    if (!tableBody) return;

    tableBody.innerHTML = "";

    if (buyers.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; color: #8fa08c; padding: 2em;">
                    No registered buyers found. Click "Load Sample JSON" or register a new buyer.
                </td>
            </tr>
        `;
        return;
    }

    buyers.forEach(function(buyer) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>
                <strong>${buyer.company}</strong>
            </td>
            <td>${buyer.email}</td>
            <td>${buyer.contact}</td>
            <td>${buyer.phone}</td>
            <td><span style="color: #4ade80; font-weight: bold;">${buyer.target}</span></td>
            <td><span class="badge-verified">${buyer.companyType}</span></td>
        `;

        tableBody.appendChild(row);
    });
}

// Search and filter buyers dynamically
if (searchInput) {
    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase().trim();
        const filtered = currentBuyersList.filter(function(b) {
            return b.company.toLowerCase().includes(query) ||
                   b.email.toLowerCase().includes(query) ||
                   b.contact.toLowerCase().includes(query) ||
                   b.companyType.toLowerCase().includes(query);
        });
        renderTable(filtered);
    });
}

// Parameter 4: Export current registered buyers as a local JSON file
if (exportJsonBtn) {
    exportJsonBtn.addEventListener("click", function() {
        if (currentBuyersList.length === 0) {
            alert("No buyer records available to export!");
            return;
        }

        // Convert the buyers list to formatted JSON
        const jsonContent = JSON.stringify(currentBuyersList, null, 4);

        // Create Blob and trigger file download
        const blob = new Blob([jsonContent], { type: "application/json" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "cabo_registered_buyers.json";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);

        alert("Registered buyers exported successfully to 'cabo_registered_buyers.json'!");
    });
}

// Clear all buyer data
if (clearBtn) {
    clearBtn.addEventListener("click", function() {
        if (confirm("Are you sure you want to clear all buyer records from localStorage?")) {
            localStorage.removeItem("buyers");
            currentBuyersList = [];
            renderTable([]);
            alert("All buyer data has been cleared from local storage.");
        }
    });
}

// Reset / Load sample data from data/buyers.json
if (resetSampleBtn) {
    resetSampleBtn.addEventListener("click", function() {
        fetch("data/buyers.json")
            .then(function(res) { return res.json(); })
            .then(function(samples) {
                currentBuyersList = samples;
                localStorage.setItem("buyers", JSON.stringify(samples));
                renderTable(currentBuyersList);
                alert("Sample buyer records loaded successfully from data/buyers.json!");
            });
    });
}

// Run initialization
initializeBuyerData();

